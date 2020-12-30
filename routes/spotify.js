const router = require("express").Router();
// HTTP client; deprecated feb 11, 2020. Should use something (e.g. axios)
const request = require("request"); // "Request" library
const axios = require("axios");
const querystring = require("querystring");
const utils = require("../utility");
// TODO: set up SSL on bluehost with DNS

const spotifyUserId = "1218307071";
const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const redirect_uri =
  process.env.DEPLOYED === "true"
    ? "https://fostimus-portfolio.herokuapp.com/spotify/callback"
    : "http://localhost:" + process.env.PORT + "/spotify/callback"; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

/**
 * app state
 */
let state = {};
const stateKey = "spotify_auth_state";

router.get("/", function(req, res) {
  res.render("spotify");
});

router.get("/login", function(req, res) {
  state.login = generateRandomString(16);
  // this line sets the cookie to the randomly generated state
  res.cookie(stateKey, state.login);

  // your application requests authorization
  const scope = "user-read-private user-read-email playlist-read-private";

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state.login
      })
  );
});

let access_token = "";
let refresh_token = "";

router.get("/callback", function(req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  //req.query === accessing query parameters from URL
  const code = req.query.code || null;
  const loginState = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  // this if statement checks that state from the request matches the state from the cookie on the user's browser
  if (loginState === null || loginState !== storedState) {
    //not sure where the HTML alert comes from when this error is thrown
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch"
        })
    );
  } else {
    res.clearCookie(stateKey);
    // step 2 of auth flow, use auth code obtained from /authorize endpoint in step 1. in this case, variable is "code", which comes from req

    // something funky is going on with var declaration scope...
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code"
      },
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64")
      },
      json: true
    };
  }

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      refresh_token = body.refresh_token;

      const options = {
        url: "https://api.spotify.com/v1/me",
        headers: {
          Authorization: "Bearer " + access_token
        },
        json: true
      };

      // we can also pass the token to the browser to make requests from there
      res.redirect(
        "/#" +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          })
      );
    } else {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "invalid_token"
          })
      );
    }
  });
});

router.get("/playlists/first", async function(req, res) {
  if (state.playlists) {
    res.json(state.playlists[0]);
  } else {
    const playlists = await getPlaylists();
    res.json(playlists[0]);
  }
});

router.get("/playlists", async function(req, res) {
  if (state.playlists) {
    res.json(state.playlists);
  } else {
    res.json(await getPlaylists());
  }
});

async function getPlaylists() {
  // use the access token to access the Spotify Web API
  const playlistsRequest = {
    method: "get",
    url: "https://api.spotify.com/v1/users/" + spotifyUserId + "/playlists",
    headers: {
      Authorization: "Bearer " + access_token
    }
  };

  const response = await axios(playlistsRequest);

  state.playlists = response.data.items;

  return state.playlists;
}

router.get("/tracks", function(req, res) {
  // use the access token to access the Spotify Web API
  const tracks = {
    url:
      "https://api.spotify.com/v1/playlists/" +
      req.query.playlistId +
      "/tracks",
    headers: {
      Authorization: "Bearer " + access_token
    },
    json: true
  };

  request.get(tracks, function(error, response, body) {
    const formattedTracks = body.items.map(track => {
      const name = track.track.name;
      const artists = utils.getArtists(track.track.artists);
      const length = utils.msToTime(track.track.duration_ms);

      return {
        name,
        artists,
        length
      };
    });

    res.json(formattedTracks);
  });
});

router.get("/play", function(req, res) {
  // use the access token to access the Spotify Web API
  const play = {
    url: "https://api.spotify.com/v1/me/player/play",
    headers: {
      Authorization: "Bearer " + access_token
    },
    json: true
  };

  console.log(play);
  request.put(play, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

router.get("/refresh_token", function(req, res) {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64")
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({
        access_token: access_token
      });
    }
  });
});

module.exports = router;

/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

require("dotenv").config();
const express = require("express"); // Express web server framework
// HTTP client; deprecated feb 11, 2020. Should use something
const request = require("request"); // "Request" library
const cors = require("cors");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
const forceSsl = require("force-ssl-heroku");

const app = express();

app.set("view engine", "ejs");

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser())
  .use(forceSsl);

const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const redirect_uri =
  process.env.DEPLOYED === "true"
    ? "https://fostimus-portfolio.herokuapp.com/callback"
    : "http://localhost:" + process.env.PORT + "/callback"; // Your redirect uri

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

const stateKey = "spotify_auth_state";

//serve html file
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/spotify", function(req, res) {
  res.sendFile(__dirname + "/public/spotify.html");
});

app.get("/login", function(req, res) {
  const state = generateRandomString(16);
  // this line sets the cookie to the randomly generated state
  res.cookie(stateKey, state);

  console.log(state);

  // your application requests authorization
  const scope = "user-read-private user-read-email playlist-read-private";
  console.log(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
  );
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
  );
});

let access_token = "";
let refresh_token = "";

app.get("/callback", function(req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  //req.query === accessing query parameters from URL
  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  // this if statement checks that state from the request matches the state from the cookie on the user's browser
  if (state === null || state !== storedState) {
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

  console.log(authOptions);
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

app.get("/playlists", function(req, res) {
  // use the access token to access the Spotify Web API
  const playlists = {
    url: "https://api.spotify.com/v1/users/1218307071/playlists",
    headers: {
      Authorization: "Bearer " + access_token
    },
    json: true
  };
  request.get(playlists, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

app.get("/tracks", function(req, res) {
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

  console.log(tracks);
  request.get(tracks, function(error, response, body) {
    console.log(body);
    res.send(body);
  });
});

app.get("/play", function(req, res) {
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

app.get("/refresh_token", function(req, res) {
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

console.log(`Listening on ${process.env.PORT || 3000}`);
app.listen(process.env.PORT || 3000);

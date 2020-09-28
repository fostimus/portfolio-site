/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
// HTTP client; deprecated feb 11, 2020. Should use something
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
var client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
  .use(cors())
  .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  // this line sets the cookie to the randomly generated state
  res.cookie(stateKey, state);

  console.log(state)

  // your application requests authorization
  var scope = 'user-read-private user-read-email playlist-read-private';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

let access_token = "";
let refresh_token = "";

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  //req.query === accessing query parameters from URL
  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  // this if statement checks that state from the request matches the state from the cookie on the user's browser
  if (state === null || state !== storedState) {
    //not sure where the HTML alert comes from when this error is thrown
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    // step 2 of auth flow, use auth code obtained from /authorize endpoint in step 1. in this case, variable is "code", which comes from req
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };
  }

  console.log(authOptions)
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      access_token = body.access_token;
      refresh_token = body.refresh_token;

      var options = {
        url: 'https://api.spotify.com/v1/me',
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        json: true
      };

      // we can also pass the token to the browser to make requests from there
      res.redirect('/#' +
        querystring.stringify({
          access_token: access_token,
          refresh_token: refresh_token
        }));
    } else {
      res.redirect('/#' +
        querystring.stringify({
          error: 'invalid_token'
        }));
    }
  });
});


app.get('/playlists', function(req, res) {
  // use the access token to access the Spotify Web API
  var playlists = {
    url: 'https://api.spotify.com/v1/users/1218307071/playlists',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
    json: true
  }
  request.get(playlists, function(error, response, body) {
    console.log(body)
    res.send(body);
  })
})

app.get('/tracks', function(req, res) {
  // use the access token to access the Spotify Web API
  var tracks = {
    url: 'https://api.spotify.com/v1/playlists/' + req.query.playlistId + '/tracks',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
    json: true
  }

  console.log(tracks)
  request.get(tracks, function(error, response, body) {
    console.log(body)
    res.send(body);
  })
})

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

console.log('Listening on 8888');
app.listen(8888);

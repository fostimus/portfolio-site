const router = require("express").Router();
const models = require("../models");
const mongoose = require("mongoose");
const getPlaylists = require("./spotify").getPlaylists;

/**
 * Set up mongoose
 */
const connectionUrl =
  "mongodb+srv://fostimus:" +
  process.env.MONGO_PASSWORD +
  "@fostimus-atlas.nzwwr.mongodb.net/portfolio?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongo Atlas DB at: " + connectionUrl);
});

router.post("/playlists", async function(req, res) {
  const playlists = await getPlaylists();
  playlists.map(playlist => {
    const playlistData = {
      name: playlist.name,
      url: playlist.external_urls.spotify,
      spotifyId: playlist.id,
      imageUrl: playlist.images.length === 1 ? playlist.images[0].url : null,
      description: playlist.description,
      tracks: []
    };

    models.playlist.findOneAndUpdate(
      { spotifyId: playlist.id },
      playlistData,
      { upsert: true },
      function(err, body) {
        console.log("updated/inserted");
      }
    );
  });
});

//fetch track data for that playlist
// fetch("/spotify/tracks?playlistId=" + playlistId)
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(track => {
//       const tbody = document.querySelector(".my-table tbody");
//       const tr = document.createElement("tr");
//
//       let tdName = document.createElement("td");
//       tdName.innerHTML = track.name;
//
//       let tdArtists = document.createElement("td");
//       tdArtists.innerHTML = track.artists;
//
//       let tdLength = document.createElement("td");
//       tdLength.innerHTML = track.length;
//
//       tr.appendChild(tdName);
//       tr.appendChild(tdArtists);
//       tr.appendChild(tdLength);
//
//       tbody.appendChild(tr);
//     });
//   });

router.get("/playlists", function(req, res) {
  models.playlist.find({}, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;

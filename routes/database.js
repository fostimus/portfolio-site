const router = require("express").Router();
const models = require("../models");
const mongoose = require("mongoose");
const spotifyRoutes = require("./spotify");
const getPlaylists = spotifyRoutes.getPlaylists;
const getTracks = spotifyRoutes.getTracks;

/**
 * Set up mongoose
 */
const connectionUrl = process.env.MONGO_CONN;
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

  /** note: need Promise.all, since each callback is asynchronous.
   * Promise.all takes exactly that; an ITERABLE of promises, returning
   * a single promise that resolves when each iterable promise resolves
   */
  const insertedObjects = await Promise.all(
    playlists.map(async playlist => {
      const tracks = await getTracks(playlist.id);

      const playlistData = {
        name: playlist.name,
        url: playlist.external_urls.spotify,
        spotifyId: playlist.id,
        imageUrl: playlist.images.length === 1 ? playlist.images[0].url : null,
        description: playlist.description,
        tracks: tracks
      };

      await models.playlist.findOneAndUpdate(
        { spotifyId: playlist.id },
        playlistData,
        { upsert: true },
        function(err, body) {
          console.log("updated/inserted");
        }
      );

      return playlistData;
    })
  );
  res.json(insertedObjects);
});

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

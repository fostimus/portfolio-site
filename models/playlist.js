const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let playlistSchema = new Schema({
  name: String,
  url: String,
  id: String,
  imageUrl: String,
  description: String,
  tracks: [{ name: String, artists: String, length: String }]
});

const playlist = mongoose.model("playlist", playlistSchema);

module.exports = playlist;

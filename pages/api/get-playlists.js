const mongoose = require("mongoose");

const connectionUrl = process.env.MONGO_CONN;
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

console.log("Connected to Mongo Atlas DB at: " + connectionUrl);

const Schema = mongoose.Schema;

let playlistSchema = new Schema({
  name: String,
  url: String,
  spotifyId: String,
  imageUrl: String,
  description: String,
  tracks: [{ name: String, artists: String, length: String }]
});

let playlist;

try {
  playlist = mongoose.model("playlist");
} catch {
  playlist = mongoose.model("playlist", playlistSchema);
}

export default async (req, res) => {
  mongoose.model("playlist").find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      console.log(items);
      res.status(200).json(items);
    }
  });
};

//return JSON.parse(JSON.stringify(playlists));

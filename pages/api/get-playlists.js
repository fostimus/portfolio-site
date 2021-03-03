const mongoose = require("mongoose");

export async function loadPlaylists() {
  const connectionUrl = process.env.MONGO_CONN;
  mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log("Connected to Mongo Atlas DB");

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

  return await mongoose.model("playlist").find({});
}

export default async (req, res) => {
  res.status(200).json(await loadPlaylists());
};

//

function msToTime(milliseconds) {
  let seconds = milliseconds / 1000;

  let minutes = (seconds - (seconds % 60)) / 60;
  seconds = Math.ceil(seconds % 60);
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  let stringSeconds = "" + seconds;
  if (seconds < 10) {
    stringSeconds = "0" + seconds;
  }

  let stringTime = "" + minutes + ":" + stringSeconds;

  return stringTime;
}

function getArtists(artistList) {
  let artists = "";

  artistList.map(artist => {
    artists = artists + artist.name + ", ";
  });

  artists = artists.slice(0, artists.length - 2);
  return artists;
}

module.exports = {
  msToTime,
  getArtists
};

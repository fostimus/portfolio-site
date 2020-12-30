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

module.exports = {
  msToTime,
  getArtists,
  generateRandomString
};

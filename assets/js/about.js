let currentPlaylistName = document.querySelector("#playlist-name");

const dropdown = () => {
  document.querySelector(".dropdown-content").classList.toggle("show");
};

const msToTime = milliseconds => {
  let seconds = milliseconds / 1000;

  let minutes = (seconds - (seconds % 60)) / 60;
  seconds = Math.ceil(seconds % 60);
  let stringSeconds = "" + seconds;
  if (seconds < 10) {
    stringSeconds = "0" + seconds;
  }

  let stringTime = "" + minutes + ":" + stringSeconds;

  return stringTime;
};

const getArtists = artistList => {
  let artists = "";

  artistList.map(artist => {
    artists = artists + artist.name + ", ";
  });

  artists = artists.slice(0, artists.length - 2);
  return artists;
};

let playlists = [];

fetch("http://localhost:8888/playlists")
  .then(response => response.json())
  .then(data => {
    const playlists = data.items;
    let dropdownContainer = document.querySelector(".dropdown-content");

    console.log(playlists);
    playlists.map(playlist => {
      // get playlist and create playlist button object
      let option = document.createElement("button");
      const title = document.createTextNode(playlist.name);

      option.appendChild(title);
      // attach onclick method to trigger action on choosing a playlist
      option.onclick = () => playlistClick(playlist.id);

      dropdownContainer.appendChild(option);
    });
  });

const playlistClick = playlistId => {
  console.log(playlistId);

  fetch("http://localhost:8888/tracks?playlistId=" + playlistId)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const tracks = data.items;

      tracks.map(track => {
        const name = track.track.name;
        const artists = getArtists(track.track.artists);
        const length = msToTime(track.track.duration_ms);

        const tr = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.innerHTML = name;

        let tdArtists = document.createElement("td");
        tdArtists.innerHTML = artists;

        let tdLength = document.createElement("td");
        tdLength.innerHTML = length;

        tr.appendChild(tdName);
        tr.appendChild(tdArtists);
        tr.appendChild(tdLength);

        const tbody = document.querySelector(".table tbody");
        tbody.appendChild(tr);
      });
    });

    document.querySelector(".dropdown-content").classList.toggle("show");;
};

// Use the fetch API to get data from the server

// return authors.map(function(author) {
//    let li = createNode('li'),
//        img = createNode('img'),
//        span = createNode('span');
//    img.src = author.picture.medium;
//    span.innerHTML = `${author.name.first} ${author.name.last}`;
//    append(li, img);
//    append(li, span);
//    append(ul, li);
//  })

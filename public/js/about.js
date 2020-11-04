let currentPlaylistName = document.querySelector("#playlist-name");

const dropdown = () => {
  document.querySelector(".dropdown-content").classList.toggle("show");
};

window.addEventListener("click", () => {

  // see if button or dropdown-content was clicked
  let clickOutside = document.querySelector('.dropdown-content') !== event.target && document.querySelector('.dropbtn') !== event.target && document.querySelector('.dropbtn img') !== event.target;

  if (clickOutside) {
    let dropdown = document.querySelector(".dropdown-content");

    // if the drop down is currently open, close it
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }

  }
})

const msToTime = milliseconds => {
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
      const option = document.createElement("button");
      const title = document.createTextNode(playlist.name);

      option.appendChild(title);
      // attach onclick method to trigger action on choosing a playlist
      option.onclick = () => playlistClick(playlist.name, playlist.external_urls.spotify, playlist.id);

      dropdownContainer.appendChild(option);
    });
  });

const playlistClick = (title, url, playlistId) => {
  console.log(playlistId);

  const tbody = document.querySelector(".table tbody");
  const tbodyChildren = tbody.children;

  //if more than just th in table, remove all td rows
  if (tbodyChildren.length > 1) {
    for (let i = tbodyChildren.length - 1; i > 0; i--) {
      tbodyChildren[i].remove();
    }
  }

  //set title in html
  const playlistName = document.querySelector('#playlist-name');
  playlistName.innerHTML = title;

  //set link in bio under title
  const playlistUrl = document.querySelector('.dropdown h3');

  const playlistLink = document.createElement('a')
  playlistLink.href = url;
  playlistLink.target = "_blank";
  playlistLink.innerHTML = playlistUrl.innerText;

  playlistUrl.innerHTML = null;
  playlistUrl.appendChild(playlistLink);

  //fetch track data for that playlist
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

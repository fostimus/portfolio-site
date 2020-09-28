let currentPlaylistName = document.querySelector('#playlist-name');

const dropdown = () => {
  // let dropbtn = document.querySelector('.dropbtn');
  document.querySelector(".dropdown-content").classList.toggle("show");

}

let playlists = [];

fetch('http://localhost:8888/playlists')
  .then(response => response.json())
  .then(data => {
    let playlists = data.items;
    let dropdownContainer = document.querySelector('.dropdown-content')

    console.log(playlists)
    playlists.map(playlist => {
      // get playlist and create playlist button object
      let option = document.createElement('button');
      const title = document.createTextNode(playlist.name);

      option.appendChild(title);
      option.onclick =
        () => playlistClick(playlist.id);

      // option.setAttribute("onclick", "() => playlistClick(\"" + playlistUrl + "\")");

      dropdownContainer.appendChild(option);
    })

  })

const playlistClick = (playlistId) => {

  console.log(playlistId)

  fetch('http://localhost:8888/tracks?playlistId=' + playlistId)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}

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

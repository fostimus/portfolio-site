/**
 * toggle dropdown
 */

document.querySelector(".dropbtn").addEventListener("click", e => {
  document.querySelector(".dropdown-content").classList.toggle("show");
});

/**
 * Close Dropdown
 */
window.addEventListener("click", () => {
  // see if button or dropdown-content was clicked
  let clickOutside =
    document.querySelector(".dropdown-content") !== event.target &&
    document.querySelector(".dropbtn") !== event.target &&
    document.querySelector(".dropbtn img") !== event.target;

  if (clickOutside) {
    let dropdown = document.querySelector(".dropdown-content");

    // if the drop down is currently open, close it
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
});

const playlistClick = (
  title,
  url,
  playlistId,
  imageUrl,
  description,
  tracks
) => {
  removePreviousPlaylist();
  setPlaylistLink(url);

  // set title in html
  const playlistName = document.querySelector("#playlist-name");
  playlistName.innerHTML = title;

  // set playlist image
  if (imageUrl) {
    const playlistImage = document.querySelector("#playlist-image");
    const image = document.createElement("img");
    image.width = 220;
    image.height = 220;

    image.setAttribute("src", imageUrl);

    playlistImage.appendChild(image);
  }

  // set playlist description
  if (description) {
    const playlistDescription = document.querySelector("#playlist-description");
    playlistDescription.textContent = description;
  }

  tracks.forEach(track => {
    const tbody = document.querySelector(".my-table tbody");
    const tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = track.name;

    let tdArtists = document.createElement("td");
    tdArtists.innerHTML = track.artists;

    let tdLength = document.createElement("td");
    tdLength.innerHTML = track.length;

    tr.appendChild(tdName);
    tr.appendChild(tdArtists);
    tr.appendChild(tdLength);

    tbody.appendChild(tr);
  });

  document.querySelector(".dropdown-content").classList.toggle("show");
};

/**
 * Load Playlists
 */

(async function loadPlaylists() {
  let dropdownContainer = document.querySelector(".dropdown-content");

  const playlistsResponse = await fetch("/database/playlists");
  const playlists = await playlistsResponse.json();

  playlists.map(playlist => {
    const option = document.createElement("button");
    const title = document.createTextNode(playlist.name);
    option.appendChild(title);

    option.addEventListener("click", () => {
      playlistClick(
        playlist.name,
        playlist.url,
        playlist.id,
        playlist.imageUrl,
        playlist.description,
        playlist.tracks
      );
    });

    dropdownContainer.appendChild(option);
  });

  // immediately display first playlist to user
  const { name, url, id, imageUrl, description, tracks } = playlists[0];

  playlistClick(name, url, id, imageUrl, description, tracks);
})();

/**
 * helpers
 */

function removePreviousPlaylist() {
  // remove table data
  const tbody = document.querySelector(".my-table tbody");
  const tbodyChildren = tbody.children;

  // if more than just th in table, remove all td rows
  if (tbodyChildren.length > 1) {
    for (let i = tbodyChildren.length - 1; i > 0; i--) {
      tbodyChildren[i].remove();
    }
  }

  // remove playlist image
  const playlistImage = document.querySelector("#playlist-image");
  if (playlistImage.children.length > 0) {
    for (let i = playlistImage.children.length - 1; i > -1; i--) {
      playlistImage.children[i];
      playlistImage.children[i].remove();
    }
  }

  // remove playlist description
  document.querySelector("#playlist-description").textContent = null;
}

function setPlaylistLink(url) {
  const playlistUrl = document.querySelector(".dropdown h3");

  const playlistLink = document.createElement("a");
  playlistLink.href = url;
  playlistLink.target = "_blank";
  playlistLink.innerHTML = playlistUrl.innerText;

  playlistUrl.innerHTML = null;
  playlistUrl.appendChild(playlistLink);
}

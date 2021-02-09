// top portion of my playlists, e.g. photo, title, etc. and includes the dropdown to change playlist.
import styles from "./playlistInfo.module.scss";
import { useState } from "react";

export default function PlaylistInfo({ playlists }) {
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(playlists);

  return (
    <div className={`${styles["dropdown"]} ${styles["mobile-flex"]}`}>
      <div className={styles["playlist-text"]}>
        <div className={styles["playlist-controls"]}>
          <div className={styles.title}>
            <h2 id="playlist-name">Select a playlist</h2>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={styles["dropbtn"]}
            >
              <img src="images/down-arrow.svg" />
            </button>
          </div>
          {showDropdown && (
            <div className={styles["dropdown-content"]}>
              {playlists.map(playlist => formatPlaylist(playlist))}
            </div>
          )}
          <h3>Listen to the full playlist on Spotify</h3>
        </div>
        <div className={styles["playlist-description"]}></div>
      </div>
      <div id="playlist-image"></div>
    </div>
  );
}

function formatPlaylist(playlist) {
  return <button onClick={() => somethign}>{playlist.name}</button>;
}

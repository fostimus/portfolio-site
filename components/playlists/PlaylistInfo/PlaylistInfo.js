// top portion of my playlists, e.g. photo, title, etc. and includes the dropdown to change playlist.
import styles from "./playlistInfo.module.scss";
import { useState } from "react";

export default function PlaylistInfo({
  playlists,
  currentPlaylist,
  setCurrentPlaylist,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const playlistName = playlists[currentPlaylist]
    ? playlists[currentPlaylist].name
    : "Select a playlist";

  // initial link could be: check out my profile
  const link = playlists[currentPlaylist] ? (
    <a href={playlists[currentPlaylist].url}>
      Listen to the full playlist on Spotify
    </a>
  ) : (
    "Listen to the full playlist on Spotify"
  );

  return (
    <div className={`${styles["dropdown"]} ${styles["mobile-flex"]}`}>
      <div className={styles["playlist-text"]}>
        <div className={styles["playlist-controls"]}>
          <div className={styles.title}>
            <h2 className={styles.name}>{playlistName}</h2>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={styles["dropbtn"]}
            >
              <img src="images/down-arrow.svg" alt="Down Arrow" />
            </button>
          </div>
          {showDropdown && (
            <div className={styles["dropdown-content"]}>
              {playlists.map((playlist, index) => (
                <button
                  onClick={() => {
                    setCurrentPlaylist(index);
                    setShowDropdown(false);
                  }}
                >
                  {playlist.name}
                </button>
              ))}
            </div>
          )}
          <h3>{link}</h3>
        </div>
        <div className={styles["playlist-description"]}>
          {playlists[currentPlaylist].description}
        </div>
      </div>
      <div className={styles.image}>
        {playlists[currentPlaylist] && (
          <img
            src={playlists[currentPlaylist].imageUrl}
            alt="Spotify Playlist Image"
          />
        )}
      </div>
    </div>
  );
}

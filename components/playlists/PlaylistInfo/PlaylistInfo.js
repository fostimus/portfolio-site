// top portion of my playlists, e.g. photo, title, etc. and includes the dropdown to change playlist.
import styles from "./playlistInfo.module.scss";

export default function PlaylistInfo() {
  return (
    <div className={`${styles["dropdown"]} ${styles["mobile-flex"]}`}>
      <div className={styles["playlist-text"]}>
        <div className={styles["playlist-controls"]}>
          <div className={styles["playlist-title"]}>
            <h2 id="playlist-name">Select a playlist</h2>
            <button className={styles["dropbtn"]}>
              <img src="images/down-arrow.svg" />
            </button>
          </div>
          <div className={styles["dropdown-content"]}></div>
          <h3>Listen to the full playlist on Spotify</h3>
        </div>
        <div className={styles["playlist-description"]}></div>
      </div>
      <div id="playlist-image"></div>
    </div>
  );
}

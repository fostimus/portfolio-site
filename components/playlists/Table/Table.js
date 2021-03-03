// custom Table component (enforce specific styling, e.g. centering the data/headers)

import styles from "./table.module.scss";

export default function Table({ playlist }) {
  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
          {playlist.tracks.map(track => (
            <tr key={track.name}>
              <td>{track.name}</td>
              <td>{track.artists}</td>
              <td>{track.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

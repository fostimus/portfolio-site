// custom Table component (enforce specific styling, e.g. centering the data/headers)

import styles from "./table.module.scss";

export default function Table() {
  return (
    <div className={styles.table}>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

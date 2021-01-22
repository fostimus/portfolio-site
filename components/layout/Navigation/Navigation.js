import styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles["nav-bar"]}>
      <ul>
        <li className={styles["nav-item"]}>
          <a href="/">Work</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/about">About</a>
        </li>
        <li className={styles["nav-item"]}>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

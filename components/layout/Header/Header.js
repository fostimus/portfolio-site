import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li className={styles["nav-item"]}>
            <a href="/">Work</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="/about">About</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="/api/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

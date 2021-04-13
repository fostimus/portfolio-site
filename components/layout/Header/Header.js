import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li className={styles["nav-item"]}>
            <Link href="/">
              <a>Work</a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="/api/resume">
              <a>Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

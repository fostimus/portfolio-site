import styles from "./sectionLayout.module.scss";

export default function SectionLayout({ children }) {
  return <div className={styles.dark}>{children}</div>;
}

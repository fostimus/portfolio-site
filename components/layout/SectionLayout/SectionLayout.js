import styles from "./sectionLayout.module.scss";

export default function SectionLayout({ children }) {
  return (
    <section className={`${styles.dark} ${styles.verticalOffset1}`}>
      {children}
    </section>
  );
}

import styles from "./sectionLayout.module.scss";

export default function SectionLayout({
  children,
  sectionNo,
  lineTextHeader,
  theme,
  footer,
  className
}) {
  const elements = (
    <>
      {lineTextHeader ? (
        <img
          className={styles["line-text-header"]}
          src={
            "images/line-text-headers/" +
            lineTextHeader +
            "/line-" +
            theme +
            ".svg"
          }
        />
      ) : (
        <></>
      )}
      {children}
    </>
  );

  return footer ? (
    <footer
      className={`${styles.dark} ${
        styles["verticalOffset" + sectionNo]
      } ${className}`}
    >
      {elements}
    </footer>
  ) : (
    <section
      className={`${styles.dark} ${styles["verticalOffset" + sectionNo]}`}
    >
      {elements}
    </section>
  );
}

import styles from "./sectionLayout.module.scss";

export default function SectionLayout({
  children,
  sectionNo,
  lineTextHeader,
  theme
}) {
  return (
    <section
      className={`${styles.dark} ${styles["verticalOffset" + sectionNo]}`}
    >
      {lineTextHeader ? (
        <img
          className="line-text-header"
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
    </section>
  );
}

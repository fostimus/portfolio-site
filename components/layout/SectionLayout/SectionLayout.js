import styles from "./sectionLayout.module.scss";
import { ThemeContext } from "../../../state";
import { useContext } from "react";

export default function SectionLayout({
  children,
  sectionNo,
  lineTextHeader,
  footer,
  theme,
  className
}) {
  const currentTheme = theme ? theme : useContext(ThemeContext);

  const elements = (
    <>
      {lineTextHeader ? (
        <img
          className={styles["line-text-header"]}
          src={
            "images/line-text-headers/" +
            lineTextHeader +
            "/line-" +
            currentTheme +
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
      className={`${styles["" + currentTheme]} ${
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

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

  const commonStyles = `${styles[currentTheme]} ${
    styles["verticalOffset" + sectionNo]
  } ${className}`;

  return footer ? (
    <footer className={commonStyles}>{elements}</footer>
  ) : (
    <section className={commonStyles}>{elements}</section>
  );
}

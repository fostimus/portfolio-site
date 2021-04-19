import styles from "./sectionLayout.module.scss";
import { ThemeContext } from "globalState";
import { useContext } from "react";
import PropTypes from "prop-types";

export default function SectionLayout({
  children,
  sectionNo,
  lineTextHeader,
  footer,
  theme,
  className,
  id,
}) {
  const currentTheme = theme ? theme : useContext(ThemeContext);

  const elements = (
    <>
      {lineTextHeader ? (
        <img
          className={styles["line-text-header"]}
          src={
            "/images/line-text-headers/" +
            lineTextHeader +
            "/line-" +
            currentTheme +
            ".svg"
          }
          alt={`Section Header: ${lineTextHeader}`}
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
    <footer id={id} className={commonStyles}>
      {elements}
    </footer>
  ) : (
    <section id={id} className={commonStyles}>
      {elements}
    </section>
  );
}

SectionLayout.defaultProps = {
  sectionNo: 1,
  footer: false,
};

SectionLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  sectionNo: PropTypes.number,
  lineTextHeader: PropTypes.string,
  footer: PropTypes.bool,
  theme: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

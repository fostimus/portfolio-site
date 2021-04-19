import styles from "./button.module.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "globalState";

export default function Button({ text, link, theme }) {
  const currentTheme = theme ? theme : useContext(ThemeContext);

  return (
    <a
      className={`${styles.btn} ${styles[currentTheme]}`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

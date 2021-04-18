import styles from "./buttonContainer.module.scss";
import Button from "../Button";
import PropTypes from "prop-types";

export default function ButtonContainer({ buttons, className, theme }) {
  return (
    <div className={`${styles["btns-container"]} ${className}`}>
      {buttons
        ? buttons.map((button) => (
          <Button
            key={button.text}
            text={button.text}
            link={button.link}
            theme={theme}
          />
        ))
        : null}
    </div>
  );
}

ButtonContainer.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
  className: PropTypes.string,
  theme: PropTypes.string,
};

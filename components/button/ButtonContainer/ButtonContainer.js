import styles from "./buttonContainer.module.scss";
import Button from "../Button";

export default function ButtonContainer({ buttons, className }) {
  return (
    <div className={`${styles["btns-container"]} ${className}`}>
      {buttons
        ? buttons.map(button => (
          <Button key={button.text} text={button.text} link={button.link} />
        ))
        : null}
    </div>
  );
}

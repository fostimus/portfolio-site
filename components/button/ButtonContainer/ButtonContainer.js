import styles from "./buttonContainer.module.scss";
import Button from "../Button";

export default function ButtonContainer({ buttons }) {
  return (
    <div className={styles["btns-container"]}>
      {buttons.map(button => (
        <Button text={button.text} link={button.link} />
      ))}
    </div>
  );
}

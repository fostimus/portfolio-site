import React from "react";
import ButtonContainer from "../../button/ButtonContainer";
import styles from "./projectDescription.module.scss";

export default function ProjectDescription({ title, date, buttons }) {
  return (
    <div className={styles.desc}>
      <div class={styles["desc-action"]}>
        <h2>{title}</h2>
        <h4>{date}</h4>
        <ButtonContainer buttons={buttons} />
      </div>
      <p></p>
    </div>
  );
}

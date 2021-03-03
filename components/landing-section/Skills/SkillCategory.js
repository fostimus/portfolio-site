import styles from "./skillCategory.module.scss";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../state";

export default function SkillCategory({ name, skills }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  const skillCategoryHeight =
    styles[
      `skill-height-${skills.length > 5 ? skills.length : skills.length - 1}`
    ];

  const commonStyles = `${styles[useContext(ThemeContext)]} ${styles.skill}`;

  return (
    <div
      className={
        mouseEnter ? `${commonStyles} ${skillCategoryHeight}` : commonStyles
      }
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div className={styles["skill-name"]}>{name}</div>
      <ul className={styles["skill-items"]}>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

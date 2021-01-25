import styles from "./skillCategory.module.scss";
import { useState } from "react";

export default function SkillCategory({ name, skills }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  const skillCategoryHeight =
    skills.length > 5
      ? styles["skill-height-" + skills.length]
      : styles["skill-height-" + (skills.length - 1)];

  return (
    <div
      className={
        mouseEnter ? `${styles.skill} ${skillCategoryHeight}` : styles.skill
      }
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div className={styles["skill-name"]}>{name}</div>
      <ul className={styles["skill-items"]}>
        {skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

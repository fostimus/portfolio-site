import styles from "./skillCategory.module.scss";
import { useState } from "react";

export default function SkillCategory({ name, skills }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className={
        mouseEnter
          ? `${styles.skill} ${styles["skill-height-" + skills.length]}`
          : styles.skill
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

//component for individual Skills (or maybe just have a list of each for the SkillCategories)

import styles from "./skillContainer.module.scss";

import SkillCategory from "./SkillCategory";

export default function Skills({ skills }) {
  return (
    <div className={styles["skills-container"]}>
      <h3>Skills</h3>
      <div className={styles.skills}>
        {skills.map(skill => (
          <SkillCategory key={skill.id} name={skill.id} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
}

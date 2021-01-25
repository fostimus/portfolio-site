import styles from "./skillContainer.module.scss";

import SkillCategory from "../SkillCategory";

export default function SkillContainer({ skills }) {
  return (
    <div className={styles["skills-container"]}>
      <h3>Skills</h3>
      <div className={styles.skills}>
        {skills.map(skill => (
          <SkillCategory
            key={skill.id}
            category={{ name: skill.id, skills: skill.contentHtml }}
          />
        ))}
      </div>
    </div>
  );
}

import styles from "./skillContainer.module.scss";

import SkillCategory from "../SkillCategory";

export default function SkillContainer({ skills }) {
  return (
    <div className={styles["skills-container"]}>
      <h3>Skills</h3>
      <div className={styles.skills}>
        {skills.map(skill => (
          <SkillCategory
            category={{ name: skill.id, skills: skill.contentHtml }}
          />
        ))}
      </div>
    </div>
  );
}

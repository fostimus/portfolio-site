import styles from "./skillContainer.module.scss";
import SkillCategory from "./SkillCategory";
import PropTypes from "prop-types";

export default function Skills({ skills }) {
  return (
    <div className={styles["skills-container"]}>
      <h3>Skills</h3>
      <div className={styles.skills}>
        {skills?.map(skill => (
          <SkillCategory key={skill.id} name={skill.id} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

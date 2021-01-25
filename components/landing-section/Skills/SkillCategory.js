import styles from "./skillCategory.module.scss";

export default function SkillCategory({ category }) {
  return (
    <div className={styles.skill}>
      <div className={styles["skill-name"]}>{category.name}</div>
      <div
        className={styles["skill-items"]}
        dangerouslySetInnerHTML={{ __html: category.skills }}
      ></div>
    </div>
  );
}

//component for individual Skills (or maybe just have a list of each for the SkillCategories)

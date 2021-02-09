import BackgroundSection from "../BackgroundSection";
import Interests from "../Interests/Interests";
import styles from "./backgroundContainer.module.scss";

//TODO: introduce front matter to md content to be able to position it
//TODO: intro bootstrap to use cards
export default function BackgroundContainer({ content }) {
  console.log(content);

  return (
    <div className={styles["bg-container4"]}>
      {content.map(section => (
        <BackgroundSection
          className={styles["bg-section" + section.frontMatter.id]}
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}

      <img
        className={`${styles["bg-section3"]} ${styles.logo}`}
        src="images/df-logo-transparent.svg"
      />
      <Interests className={styles["bg-section4"]} />
    </div>
  );
}

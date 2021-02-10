import BackgroundSection from "../BackgroundSection";
import Interests from "../Interests/Interests";
import styles from "./backgroundContainer.module.scss";

//TODO: introduce front matter to md content to be able to position it
//TODO: intro bootstrap to use cards
export default function BackgroundContainer({ content }) {
  return (
    <div className={styles["bg-container4"]}>
      {content.map(section => {
        console.log(section);
        return (
          <BackgroundSection
            className={styles["bg-section" + section.frontMatter.id]}
            key={section.title}
            title={section.title}
            content={section.content}
          />
        );
      })}

      <BackgroundSection>
        <embed
          className={`${styles["bg-section3"]} ${styles.logo}`}
          src="/images/df-logo-transparent.svg"
        />
      </BackgroundSection>
      <BackgroundSection>
        <Interests className={styles["bg-section4"]} />
      </BackgroundSection>
    </div>
  );
}

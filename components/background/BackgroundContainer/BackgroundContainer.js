import BackgroundSection from "../BackgroundSection";
import Interests from "../Interests/Interests";
import styles from "./backgroundContainer.module.scss";

export default function BackgroundContainer({ content }) {
  return (
    <div className={styles["bg-container4"]}>
      {content.map(section => (
        <BackgroundSection
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}

      <Interests />
    </div>
  );
}
import styles from "./landingSection.module.scss";
import Socials from "../Socials";
import SkillContainer from "../SkillContainer";

export default function LandingSection({ socials, skills }) {
  return (
    <>
      <h2 className={styles["limited-width"]}>
        Hello! My name is Derek. I'm a Full-Stack Engineer living in San
        Francisco.
      </h2>
      <Socials socials={socials} />
      <SkillContainer skills={skills} />
    </>
  );
}

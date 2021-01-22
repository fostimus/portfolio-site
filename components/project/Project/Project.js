import ProjectDescription from "../ProjectDescription";
import styles from "./project.module.scss";

//reversed flag is for swapping desc and image to have better ux
export default function Project({ title, date, buttons, image, reversed }) {
  return (
    <section
      className={`${styles["background-project"]} ${
        reversed ? styles["flex-reverse"] : ""
      }`}
    >
      <ProjectDescription title={title} date={date} buttons={buttons} />
      <div class="project-image">
        <img src={image} />
      </div>
    </section>
  );
}

import ProjectDescription from "../ProjectDescription";
import styles from "./project.module.scss";
import Image from "next/image";

export default function Project({ title, date, buttons, image, reversed }) {
  return (
    <section
      className={`${styles["background-project"]} ${
        reversed ? styles["flex-reverse"] : ""
      }`}
    >
      <ProjectDescription title={title} date={date} buttons={buttons} />
      <div className={styles["project-image"]}>
        <Image src={image.path} width={image.width} height={image.height} />
      </div>
    </section>
  );
}

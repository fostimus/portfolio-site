import ProjectDescription from "../ProjectDescription";
import styles from "./project.module.scss";
import Image from "next/image";

export default function Project({ title, id, date, buttons, image, reversed }) {
  return (
    <section
      className={`${styles["background-project"]} ${
        reversed ? styles["flex-reverse"] : ""
      }`}
    >
      <ProjectDescription title={title} id={id} date={date} buttons={buttons} />
      <div className={styles["project-image"]}>
        <Image
          src={image.path}
          width={image.width}
          height={image.height}
          alt={title}
        />
      </div>
    </section>
  );
}

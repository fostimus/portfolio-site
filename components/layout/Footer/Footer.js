import styles from "./footer.module.scss";
import SectionLayout from "../SectionLayout";
import ButtonContainer from "../../button/ButtonContainer";

export default function Footer() {
  return (
    <SectionLayout
      footer
      sectionNo={1}
      theme={"dark"}
      lineTextHeader={"get-in-touch"}
      className="my-container"
    >
      <h2 className="limited-width">
        Say hello! Learn more about my life as a professional and a person.
      </h2>

      <ButtonContainer
        className={styles["footer-links"]}
        buttons={[
          { text: "Get in touch", link: "mailto:derekfoster94@gmail.com" },
          { text: "Learn about me", link: "/about" }
        ]}
      />

      <div className={styles["copyright"]}>
        <p>Ingredients: Heart, soul, and lots of coffee</p>
        <br />
        <p>&copy; Derek Foster 2021</p>
      </div>
    </SectionLayout>
  );
}

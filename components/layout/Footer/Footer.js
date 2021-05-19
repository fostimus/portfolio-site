import styles from "./footer.module.scss";
import SectionLayout from "../SectionLayout";
import ButtonContainer from "../../button/ButtonContainer";
import PropTypes from "prop-types";

export default function Footer({ theme }) {
  return (
    <SectionLayout
      footer
      theme={theme}
      lineTextHeader={"get-in-touch"}
      className={`my-container ${styles.footer}`}
    >
      <h2 className="limited-width">
        Say hello! Learn more about my life as a professional and a person.
      </h2>

      <ButtonContainer
        className={styles["footer-links"]}
        theme={theme}
        buttons={[
          { text: "Get in touch", link: "mailto:derekfoster94@gmail.com" },
          { text: "Learn about me", link: "/about" },
        ]}
      />

      <div className={styles["copyright"]}>
        <p>Ingredients: Heart, soul, and lots of coffee</p>
        <br />
        <p>&copy; Derek Foster {new Date().getFullYear()}</p>
      </div>
    </SectionLayout>
  );
}

Footer.defaultProps = {
  theme: "dark",
};

Footer.propTypes = {
  theme: PropTypes.string,
};

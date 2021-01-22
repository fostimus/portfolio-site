import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className="dark-bg my-container footer">
      <img
        className="line-text-header"
        src="images/line-text-headers/get-in-touch/line-dark.svg"
      />

      <h2 className="limited-width">
        Say hello! Learn more about my life as a professional and a person.
      </h2>

      <div className="btns-container footer-links">
        <a
          className="btn"
          href="mailto:derekfoster94@gmail.com"
          target="_blank"
        >
          Get in touch
        </a>
        <a className="btn" href="images/favicon/about">
          Learn about me
        </a>
      </div>

      <div className="copyright">
        <p>Ingredients: Heart, soul, and lots of coffee</p>
        <br />
        <p>&copy; Derek Foster 2020</p>
      </div>
    </footer>
  );
}

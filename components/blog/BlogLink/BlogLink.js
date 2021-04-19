import styles from "./BlogLink.module.scss";
import PropTypes from "prop-types";

export default function BlogLink({ link, title, date }) {
  return (
    <a className={styles.link} href={`/blog/${link}`}>
      <h3>{title}</h3>
      <h5>{date}</h5>
      <hr />
    </a>
  );
}

BlogLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

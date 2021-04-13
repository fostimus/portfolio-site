import styles from "./BlogLink.module.scss";
import PropTypes from "prop-types";
import { formatSlug } from "@fostimus/hr-utils";

export default function BlogLink({ title, date }) {
  return (
    <a className={styles.link} href={`/blog/${formatSlug(title)}`}>
      <h3>{title}</h3>
      <h5>{date}</h5>
      <hr />
    </a>
  );
}

BlogLink.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

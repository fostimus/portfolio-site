import PropTypes from "prop-types";
import commonStyles from "../blogStyles.module.scss";
import styles from "./blogPost.module.scss";

export default function BlogPost({ children, meta }) {
  return (
    <section className={`${styles.blogPost} ${commonStyles.container}`}>
      <h1>{meta.title}</h1>
      <h4>{meta.date}</h4>
      <h4>{meta.desc}</h4>
      <article>{children}</article>
    </section>
  );
}

BlogPost.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  meta: PropTypes.object,
};

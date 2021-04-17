import styles from "./LandingContainer.module.scss";
import commonStyles from "../blogStyles.module.scss";
import BlogLink from "../BlogLink";
import PropTypes from "prop-types";

export default function LandingContainer({ blogs }) {
  return (
    <section className={`${styles.container} ${commonStyles.container}`}>
      <div className={styles.tagline}>
        <h1>Blog</h1>
        <h4>Frontend Development. Fitness. Basketball. Podcasting.</h4>
        <br />
        <h4>+ anything else that pops out of my head.</h4>
      </div>
      <>
        {blogs.map((blog, idx) => (
          <BlogLink key={idx} title={blog.title} date={blog.date} />
        ))}
        {/* TODO: pagination for blog posts goes here */}
      </>
    </section>
  );
}

LandingContainer.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};

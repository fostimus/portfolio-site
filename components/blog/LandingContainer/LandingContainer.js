import styles from "./LandingContainer.module.scss";
import commonStyles from "../blogStyles.module.scss";
import BlogLink from "../BlogLink";
import PropTypes from "prop-types";

export default function LandingContainer({ blogs, desc }) {
  return (
    <section className={`${styles.container} ${commonStyles.container}`}>
      <div className={styles.tagline}>
        <h1>Blog</h1>
        {desc.map((line) => (
          <>
            <h4>{line}</h4>
            <br />
          </>
        ))}
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
      content: PropTypes.string.isRequired,
    })
  ),
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
};

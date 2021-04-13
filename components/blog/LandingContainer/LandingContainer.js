import styles from "./LandingContainer.module.scss";
import BlogLink from "../BlogLink";
import PropTypes from "prop-types";

export default function LandingContainer({ blogs }) {
  return (
    <section className={styles.container}>
      {blogs.map((blog, idx) => (
        <BlogLink key={idx} title={blog.title} date={blog.date} />
      ))}
      {/* TODO: pagination for blog posts goes here */}
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
};

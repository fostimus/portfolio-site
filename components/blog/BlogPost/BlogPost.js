import PropTypes from "prop-types";
import commonStyles from "../blogStyles.module.scss";

export default function BlogPost({ children }) {
  return (
    <section className={commonStyles.container}>
      <article>{children}</article>
    </section>
  );
}

BlogPost.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

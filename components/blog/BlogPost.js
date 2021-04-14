import PropTypes from "prop-types";

export default function BlogPost({ meta, children }) {
  return (
    <>
      <h1>{meta.title}</h1>
      <article>{children}</article>
    </>
  );
}

BlogPost.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

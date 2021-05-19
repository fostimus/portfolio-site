import PropTypes from "prop-types";
import commonStyles from "../blogStyles.module.scss";
import styles from "./blogPost.module.scss";
import dayjs from "dayjs";
import { dateFormat } from "@blog";

export default function BlogPost({ children, meta }) {
  const twitterText = `Check out this blog post I loved! ${meta.title}`;

  return (
    <section className={`${styles.blogPost} ${commonStyles.container}`}>
      <h1>{meta.title}</h1>
      <h4>{meta.desc}</h4>
      <h4>{dayjs(meta.date).format(dateFormat)}</h4>
      <article>{children}</article>
      <section className="buttons">
        <a
          className="twitter-share-button"
          data-size="large"
          href={`https://twitter.com/intent/tweet?text=${twitterText}`}
        >
          Tweet
        </a>
      </section>
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

import { PageLayout, SectionLayout } from "@layout";
import { LandingContainer } from "@blog";

import PropTypes from "prop-types";

export async function getStaticProps() {
  const posts = importAll(require.context(".", true, /\.mdx$/));

  const blogs = posts.map((post) => ({
    title: post.module.meta.title,
    date: post.module.meta.date,
  }));

  return {
    props: {
      blogs: blogs,
    },
  };
}

export default function BlogHomePage({ blogs }) {
  return (
    <PageLayout theme="light" footerTheme="light">
      <SectionLayout>
        <LandingContainer blogs={blogs} />
      </SectionLayout>
    </PageLayout>
  );
}

BlogHomePage.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

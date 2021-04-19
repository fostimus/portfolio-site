import { PageLayout, SectionLayout } from "@layout";
import { LandingContainer, dateFormat } from "@blog";
import dayjs from "dayjs";

import PropTypes from "prop-types";

export async function getStaticProps() {
  const posts = importAll(require.context(".", true, /\.mdx$/));

  const blogs = posts.map((post) => ({
    link: post.link.replace("/", "").replace(".mdx", ""),
    title: post?.module?.meta?.title,
    date: dayjs(post?.module?.meta?.date).format(dateFormat),
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
    })
  ),
};

function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName),
  }));
}

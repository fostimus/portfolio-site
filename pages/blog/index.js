import { PageLayout, SectionLayout } from "@layout";
import { LandingContainer } from "@blog";
import { blogs } from "../../content/blog";

import PropTypes from "prop-types";

export async function getStaticProps() {
  //TODO: import all other files in this "/blog" folder, format date and send titles + dates to landing container

  /* from article
  const posts = importAll(
    require.context("./pages/blog/", true, /\.mdx$/)
  );
  */
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
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

/* from article
function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }));
}
*/

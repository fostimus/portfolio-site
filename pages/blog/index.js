import { PageLayout, SectionLayout } from "@layout";
import { LandingContainer } from "@blog";
import { desc1, desc2, blogs } from "../../content/blog";

import PropTypes from "prop-types";

export async function getStaticProps() {
  return {
    props: {
      desc: [desc1, desc2],
      blogs: blogs,
    },
  };
}

export default function BlogHomePage({ desc, blogs }) {
  return (
    <PageLayout theme="light" footerTheme="light">
      <SectionLayout>
        <LandingContainer blogs={blogs} desc={desc} />
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

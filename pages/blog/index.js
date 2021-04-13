import { PageLayout, SectionLayout } from "@layout";
import LandingSection from "../../components/landing-section";
import LandingContainer from "../../components/blog";
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
        <LandingSection tagline="Blog" desc={desc} />
      </SectionLayout>
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

import { PageLayout, SectionLayout } from "@layout";
import LandingSection from "../../components/landing-section";
import BlogLink from "../../components/blog/BlogLink/BlogLink";
import { desc1, desc2 } from "../../content/blog";

import PropTypes from "prop-types";

export async function getStaticProps() {
  return {
    props: {
      desc: [desc1, desc2],
    },
  };
}

export default function BlogHomePage({ desc }) {
  return (
    <PageLayout theme="light">
      <SectionLayout sectionNo={1}>
        <LandingSection tagline="Blog" desc={desc} />
        <BlogLink title="Testingggg" date="April 6, 2021" />
      </SectionLayout>
    </PageLayout>
  );
}

BlogHomePage.propTypes = {
  desc: PropTypes.string.isRequired,
};

import { PageLayout, SectionLayout } from "@layout";
import LandingSection from "../../components/landing-section";
import BlogLink from "../../components/blog/BlogLink/BlogLink";
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
    <PageLayout theme="light">
      <SectionLayout>
        <LandingSection tagline="Blog" desc={desc} />
      </SectionLayout>
      <SectionLayout>
        <div style={{ width: "40%", margin: "0 auto" }}>
          {blogs.map((blog, idx) => (
            <BlogLink key={idx} title={blog.title} date={blog.date} />
          ))}
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

BlogHomePage.propTypes = {
  desc: PropTypes.string.isRequired,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

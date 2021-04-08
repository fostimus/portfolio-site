import { PageLayout, SectionLayout } from '@layout';
import LandingSection from '../../components/landing-section';
import { desc1, desc2 } from '../../content/blog';

export async function getStaticProps() {
  return {
    props: {
      desc: [desc1, desc2],
    },
  };
}

export default function BlogHomePage({ desc }) {
  return (
    <PageLayout>
      <SectionLayout sectionNo={1}>
        <LandingSection tagline="blog" desc={desc} />
      </SectionLayout>
    </PageLayout>
  );
}

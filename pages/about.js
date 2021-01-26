import { PageLayout, SectionLayout } from "../components/layout";
import Skills from "../components/landing-section/Skills";
import Socials from "../components/landing-section/Socials";
import { skills } from "../content/skills";
import { blackSocials } from "../content/socials";

export async function getStaticProps() {
  return {
    props: {
      skills,
      socials: blackSocials
    }
  };
}

export default function AboutPage({ skills, socials }) {
  return (
    <PageLayout theme="light">
      <Socials socials={socials} />
      <Skills skills={skills} />
    </PageLayout>
  );
}

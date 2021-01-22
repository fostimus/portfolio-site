import PageLayout from "../components/layout/PageLayout";
import SectionLayout from "../components/layout/SectionLayout";
import LandingSection from "../components/landing-section/LandingSection";
import { skillsParser } from "../content/markdown-parser";
import { whiteSocials } from "../content/socials";

export async function getStaticProps() {
  const allSkillsData = await skillsParser();
  return {
    props: {
      allSkillsData,
      socials: whiteSocials
    }
  };
}

export default function HomePage({ allSkillsData, socials }) {
  return (
    <PageLayout>
      <SectionLayout sectionNo={1} theme={"dark"}>
        <LandingSection socials={socials} skills={allSkillsData} />
      </SectionLayout>
    </PageLayout>
  );
}

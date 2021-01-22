import { PageLayout, SectionLayout } from "../components/layout";
import LandingSection from "../components/landing-section";
import ProjectDescription from "../components/projects/ProjectDescription";
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
      <SectionLayout sectionNo={1} theme="dark">
        <LandingSection socials={socials} skills={allSkillsData} />
      </SectionLayout>
      <SectionLayout sectionNo={2} theme="dark" lineTextHeader="projects">
        <ProjectDescription
          title="test"
          link="another test"
          buttons={[{ text: "button 1", link: "hehehe" }]}
        />
      </SectionLayout>
    </PageLayout>
  );
}

import PageLayout from "../components/layout/PageLayout";
import SkillContainer from "../components/landing-section/SkillContainer";
import Socials from "../components/landing-section/Socials";
import SectionLayout from "../components/layout/SectionLayout";
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
        <h2 style={{ textAlign: "center", width: "600px", margin: "0 auto" }}>
          Hello! My name is Derek. I'm a Full-Stack Engineer living in San
          Francisco.
        </h2>
        <Socials socials={socials} />
        <SkillContainer skills={allSkillsData} />
      </SectionLayout>
    </PageLayout>
  );
}

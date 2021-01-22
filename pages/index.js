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
  return <PageLayout />;
}

//
// <SectionLayout>
//   <h2 style={{ textAlign: "center" }}>Heeeey</h2>
//   <Socials socials={socials} />
//   <SkillContainer skills={allSkillsData} />
// </SectionLayout>

import SkillContainer from "../components/landing-section/SkillContainer/SkillContainer";
import { skillsParser } from "../content/markdown-parser";

export async function getStaticProps() {
  const allSkillsData = await skillsParser();
  return {
    props: {
      allSkillsData
    }
  };
}

export default function HomePage({ allSkillsData }) {
  return <SkillContainer skills={allSkillsData} />;
}

// import Layout from "../components/Layout";
import SkillContainer from "../components/landing-section/SkillContainer";
import Socials from "../components/landing-section/Socials";
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
  return (
    <>
      <Socials black />
      <SkillContainer skills={allSkillsData} />
    </>
  );
}

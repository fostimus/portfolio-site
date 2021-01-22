// import Layout from "../components/Layout";
import SkillContainer from "../components/landing-section/SkillContainer";
import Socials from "../components/landing-section/Socials";
import { skillsParser } from "../content/markdown-parser";
import { blackSocials } from "../content/socials";

export async function getStaticProps() {
  const allSkillsData = await skillsParser();
  return {
    props: {
      allSkillsData,
      socials: blackSocials
    }
  };
}

export default function HomePage({ allSkillsData, socials }) {
  return (
    <>
      <Socials socials={socials} black />
      <SkillContainer skills={allSkillsData} />
    </>
  );
}

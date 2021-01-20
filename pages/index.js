import testStyles from "../styles/test.module.less";
import SkillCategory from "../components/landing-section/SkillCategory";
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
    <div className={testStyles.test}>
      {allSkillsData.map(skill => (
        <SkillCategory
          category={{ name: skill.id, skills: skill.contentHtml }}
        />
      ))}
    </div>
  );
}

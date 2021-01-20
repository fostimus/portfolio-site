import testStyles from "../styles/test.module.less";
import SkillCategory from '../components/landing-section/SkillCategory';

export default function HomePage() {
  return (
    <div className={testStyles.test}>
      Howdy
      <SkillCategory
        category={{ name: "Skill", skills: ["Skill 1", "Skill 2"] }}
      />
    </div>
  );
}

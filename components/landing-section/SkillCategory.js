//component for top level SkillCategory

export default function SkillCategory({ category }) {
  console.log(category.skills);
  return (
    <div className="skill">
      <div className="skill-name">{category.name}</div>
      <div className="skill-items">{category.skills}</div>
    </div>
  );
}

//component for individual Skills (or maybe just have a list of each for the SkillCategories)

import { PageLayout, SectionLayout } from "../components/layout";
import LandingSection from "../components/landing-section";
import Project from "../components/project";
import { skillsParser } from "../content/markdown-parser";
import { whiteSocials } from "../content/socials";
import { projects } from "../content/projects";

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
      <SectionLayout sectionNo={1} theme="dark" lineTextHeader="projects">
        {projects.map((project, index) => (
          <Project
            title={project.name}
            key={project.id}
            id={project.id}
            date={project.date}
            image={project.image}
            reversed={index % 2 === 0 ? true : false}
          />
        ))}
      </SectionLayout>
    </PageLayout>
  );
}

import { PageLayout, SectionLayout } from "../components/layout";
import LandingSection from "../components/landing-section";
import Project from "../components/project";
import { skills } from "../content/skills";
import { whiteSocials } from "../content/socials";
import { projects } from "../content/projects";
import { homeTagline } from "../content/tagline";

export async function getStaticProps() {
  return {
    props: {
      tagline: homeTagline,
      skills,
      socials: whiteSocials
    }
  };
}

export default function HomePage({ tagline, skills, socials }) {
  // <embed src="df-logo.svg" />

  return (
    <PageLayout>
      <SectionLayout sectionNo={1}>
        <LandingSection tagline={tagline} socials={socials} skills={skills} />
      </SectionLayout>
      <SectionLayout sectionNo={1} lineTextHeader="projects">
        {projects.map((project, index) => (
          <Project
            title={project.name}
            key={project.id}
            id={project.id}
            date={project.date}
            image={project.image}
            buttons={project.buttons}
            reversed={index % 2 === 0 ? true : false}
          />
        ))}
      </SectionLayout>
    </PageLayout>
  );
}

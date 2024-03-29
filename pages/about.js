import { PageLayout, SectionLayout } from "../components/layout";
import LandingSection from "../components/landing-section";
import BackgroundContainer from "../components/background";
import EllipsisNav from "../components/ellipsis-nav";
// import Playlists from "../components/playlists/Playlists";
import { skills } from "../content/skills";
import { blackSocials } from "../content/socials";
import { aboutTagline, aboutImage } from "../content/tagline";
import { markdownParser } from "../content/markdownParser";
import path from "path";
import { loadPlaylists } from "./api/get-playlists";
import dynamic from "next/dynamic";

const Playlists = dynamic(() => import("../components/playlists/Playlists"));

export async function getStaticProps() {
  const backgroundDirectory = path.join(process.cwd(), "content/background");
  const playlists = JSON.parse(JSON.stringify(await loadPlaylists()));

  return {
    props: {
      tagline: aboutTagline,
      image: aboutImage,
      skills,
      socials: blackSocials,
      background: await markdownParser(backgroundDirectory),
      playlists,
    },
  };
}

export default function AboutPage({
  tagline,
  image,
  skills,
  socials,
  background,
  playlists,
}) {
  const sections = ["profile", "background", "music"];

  return (
    <PageLayout theme="light">
      <SectionLayout id={sections[0]} sectionNo={1}>
        <EllipsisNav sections={sections} currentSection={0} />
        <LandingSection
          tagline={tagline}
          image={image}
          socials={socials}
          skills={skills}
         />
      </SectionLayout>
      <SectionLayout id={sections[1]} sectionNo={1} lineTextHeader="background">
        <EllipsisNav sections={sections} currentSection={1} />
        <BackgroundContainer content={background} />
      </SectionLayout>
      <SectionLayout sectionNo={1}>
        <img
          style={{ width: "100%", height: "100%", verticalAlign: "bottom" }}
          src="/images/lakers.svg"
          alt="Lakers Gradient"
        />
      </SectionLayout>
      <SectionLayout
        id={sections[2]}
        sectionNo={1}
        theme="dark"
        lineTextHeader="spotify-playlists"
      >
        <EllipsisNav sections={sections} currentSection={2} />
        <Playlists playlists={playlists} />
      </SectionLayout>
    </PageLayout>
  );
}

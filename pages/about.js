import { PageLayout, SectionLayout } from "../components/layout";
import LandingSection from "../components/landing-section";
import BackgroundContainer from "../components/background";
import EllipsisNav from "../components/ellipsis-nav";
import { skills } from "../content/skills";
import { blackSocials } from "../content/socials";
import { aboutTagline, aboutImage } from "../content/tagline";
import { markdownParser } from "../content/markdownParser";
import path from "path";

export async function getStaticProps() {
  const backgroundDirectory = path.join(process.cwd(), `content/background`);

  return {
    props: {
      tagline: aboutTagline,
      image: aboutImage,
      skills,
      socials: blackSocials,
      background: await markdownParser(backgroundDirectory)
    }
  };
}

export default function AboutPage({
  tagline,
  image,
  skills,
  socials,
  background
}) {
  return (
    <PageLayout theme="light">
      <SectionLayout sectionNo={1}>
        <EllipsisNav
          sections={["test", "yes", "shweet"]}
          currentSection="yes"
        />
        <LandingSection
          tagline={tagline}
          image={image}
          socials={socials}
          skills={skills}
        ></LandingSection>
      </SectionLayout>
      <SectionLayout sectionNo={1} lineTextHeader="background">
        <EllipsisNav
          sections={["test", "yes", "shweet"]}
          currentSection="yes"
        />
        <BackgroundContainer content={background} />
      </SectionLayout>
      <SectionLayout sectionNo={1}>
        <img
          style={{ width: "100%", height: "100%", verticalAlign: "bottom" }}
          src="/images/lakers.svg"
        />
      </SectionLayout>
      <SectionLayout
        sectionNo={1}
        theme="dark"
        lineTextHeader="spotify-playlists"
      ></SectionLayout>
    </PageLayout>
  );
}

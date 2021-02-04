import { PageLayout, SectionLayout } from "../components/layout";
import LandingSection from "../components/landing-section";
import BackgroundContainer from "../components/background";
import EllipsisNav from "../components/ellipsis-nav";
import Playlists from "../components/playlists/Playlists";
import { skills } from "../content/skills";
import { blackSocials } from "../content/socials";
import { aboutTagline, aboutImage } from "../content/tagline";
import { markdownParser } from "../content/markdownParser";
import path from "path";
// const models = require("../models");
// const mongoose = require("mongoose");
//
// function loadPlaylists() {
//   const connectionUrl = process.env.MONGO_CONN;
//   mongoose.connect(connectionUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//
//   const db = mongoose.connection;
//   db.on("error", console.error.bind(console, "connection error:"));
//   db.once("open", function() {
//     console.log("Connected to Mongo Atlas DB at: " + connectionUrl);
//     models.playlist.find({}, function(err, result) {
//       if (err) {
//         res.json(err);
//       } else {
//         return result;
//       }
//     });
//   });
// }

export async function getStaticProps() {
  const backgroundDirectory = path.join(process.cwd(), `content/background`);
  // const getPlaylists = loadPlaylists();

  // console.log(getPlaylists);

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
        ></LandingSection>
      </SectionLayout>
      <SectionLayout id={sections[1]} sectionNo={1} lineTextHeader="background">
        <EllipsisNav sections={sections} currentSection={1} />
        <BackgroundContainer content={background} />
      </SectionLayout>
      <SectionLayout sectionNo={1}>
        <img
          style={{ width: "100%", height: "100%", verticalAlign: "bottom" }}
          src="/images/lakers.svg"
        />
      </SectionLayout>
      <SectionLayout
        id={sections[2]}
        sectionNo={1}
        theme="dark"
        lineTextHeader="spotify-playlists"
      >
        <EllipsisNav sections={sections} currentSection={2} />
        <Playlists />
      </SectionLayout>
    </PageLayout>
  );
}

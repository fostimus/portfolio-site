import Socials from "../Socials";
import Skills from "../Skills";
import Tagline from "../Tagline";
import Image from "next/image";
import styles from "./landingSection.module.scss";

export default function LandingSection({ tagline, socials, skills, image }) {
  // flex-column styles messing up image style
  return (
    <div className="flex-column">
      <div className={styles["landing-layout"]}>
        <Tagline tagline={tagline} socials={socials} />
        {image ? (
          <Image src={image.path} width={image.width} height={image.height} />
        ) : (
          <></>
        )}
      </div>

      <Skills skills={skills} />
    </div>
  );
}

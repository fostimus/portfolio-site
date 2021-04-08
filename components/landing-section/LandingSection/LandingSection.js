import Skills from "../Skills";
import Tagline from "../Tagline";
import Image from "next/image";
import styles from "./landingSection.module.scss";

export default function LandingSection({ tagline, desc, socials, skills, image }) {
  // flex-column styles messing up image style
  return (
    <section className="flex-column">
      <div className={styles["landing-layout"]}>
        <div className={styles.text}>
          <Tagline tagline={tagline} socials={socials} />
          {desc && <h4>{desc}</h4>}
        </div>
        {image ? (
          <Image src={image.path} width={image.width} height={image.height} />
        ) : (
          <></>
        )}
      </div>

      {skills && <Skills skills={skills} />}|
    </section>
  );
}

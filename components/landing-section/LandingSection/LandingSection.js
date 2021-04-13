import Skills from "../Skills";
import Tagline from "../Tagline";
import Image from "next/image";
import styles from "./landingSection.module.scss";
import PropTypes from "prop-types";

export default function LandingSection({
  tagline,
  desc,
  socials,
  skills,
  image,
}) {
  // flex-column styles messing up image style
  //
  return (
    <section className="flex-column">
      <div className={styles["landing-layout"]}>
        <div className={styles.text}>
          <Tagline tagline={tagline} socials={socials} />
          {desc &&
            desc.map((line) => (
              <>
                <h4>{line}</h4>
                <br />
              </>
            ))}
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

LandingSection.propTypes = {
  tagline: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string),
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      hover: PropTypes.string.isRequired,
    })
  ),
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      skills: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  image: PropTypes.shape({
    path: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
};

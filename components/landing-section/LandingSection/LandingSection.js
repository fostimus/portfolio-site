import Socials from "../Socials";
import Skills from "../Skills";
import Image from "next/image";

export default function LandingSection({ tagline, socials, skills, image }) {
  // flex-column styles messing up image style
  return (
    <div className="flex-column">
      <h2 className="limited-width">{tagline}</h2>
      <Socials socials={socials} />
      <Skills skills={skills} />
      <div>
        {image ? (
          <Image src={image.path} width={image.width} height={image.height} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

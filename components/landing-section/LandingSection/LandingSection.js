import Socials from "../Socials";
import Skills from "../Skills";

export default function LandingSection({ tagline, socials, skills }) {
  return (
    <div className="flex-column">
      <h2 className="limited-width">{tagline}</h2>
      <Socials socials={socials} />
      <Skills skills={skills} />
    </div>
  );
}

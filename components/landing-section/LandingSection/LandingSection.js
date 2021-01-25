import Socials from "../Socials";
import Skills from "../Skills";

export default function LandingSection({ socials, skills }) {
  return (
    <div className="flex-column">
      <h2 className="limited-width">
        Hello! My name is Derek. I'm a Full-Stack Engineer living in San
        Francisco.
      </h2>
      <Socials socials={socials} />
      <Skills skills={skills} />
    </div>
  );
}

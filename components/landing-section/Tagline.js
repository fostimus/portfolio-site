import Socials from "./Socials";

export default function Tagline({ tagline, socials }) {
  return (
    <div>
      <h2 className="limited-width">{tagline}</h2>
      <Socials socials={socials} />
    </div>
  );
}

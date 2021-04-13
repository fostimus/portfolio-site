import Socials from "./Socials";
import PropTypes from "prop-types";

export default function Tagline({ tagline, socials }) {
  return (
    <div>
      <h2 className="limited-width">{tagline}</h2>
      {socials && <Socials socials={socials} />}
    </div>
  );
}

Tagline.propTypes = {
  tagline: PropTypes.string,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      hover: PropTypes.string.isRequired,
    })
  ),
};

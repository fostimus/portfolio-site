import { useState } from "react";
import Image from "next/image";
import styles from "./socials.module.scss";
import PropTypes from "prop-types";

function Social({ info }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <a
      href={info.url}
      target="_blank"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      key={info.name}
      rel="noreferrer"
    >
      {mouseEnter ? (
        <Image
          src={info.hover}
          width={25}
          height={25}
          alt={`${info.name} icon`}
        />
      ) : (
        <Image
          src={info.icon}
          width={25}
          height={25}
          alt={`${info.name} icon`}
        />
      )}
    </a>
  );
}

export default function Socials({ socials }) {
  return (
    <section className={styles["social-links"]}>
      {socials?.map((social) => (
        <Social info={social} key={social.name} />
      ))}
    </section>
  );
}

Social.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    hover: PropTypes.string.isRequired,
  }),
};

Socials.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      hover: PropTypes.string.isRequired,
    })
  ),
};

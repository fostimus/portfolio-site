import { useState } from "react";
import Image from "next/image";
import styles from "./socials.module.scss";

function Social({ info }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <a
      href={info.url}
      target="_blank"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      key={info.name}
    >
      {mouseEnter ? (
        <Image src={info.hover} width={25} height={25} />
      ) : (
        <Image src={info.icon} width={25} height={25} />
      )}
    </a>
  );
}

export default function Socials({ socials }) {
  return (
    <section className={styles["social-links"]}>
      {socials.map(social => (
        <Social info={social} key={social.name} />
      ))}
    </section>
  );
}

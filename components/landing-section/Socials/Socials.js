import { useState } from "react";
import Image from "next/image";

function Social({ info, black }) {
  const [mouseEnter, setMouseEnter] = useState(false);

  console.log(info);

  return (
    <a
      href={info.url}
      target="_blank"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {mouseEnter ? (
        <Image src={info.hover} width={25} height={25} />
      ) : black ? (
        <Image src={info.black} width={25} height={25} />
      ) : (
        <Image src={info.white} width={25} height={25} />
      )}
    </a>
  );
}

export default function Socials({ socials, black }) {
  return (
    <section className="social-links <%= background %>">
      {socials.map(social => (
        <Social info={social} black={black} />
      ))}
    </section>
  );
}

/*
<Social black />
<a href="https://www.linkedin.com/in/derek-foster/" target="_blank">
  <img
    src="images/social-media-icons/<%= color %>/linkedin.svg"
    onmouseover="this.src='images/social-media-icons/hover/linkedin.svg'"
    onmouseout="this.src='images/social-media-icons/<%= color %>/linkedin.svg'"
  />
</a>
<a href="https://github.com/fostimus" target="_blank">
  <img
    src="images/social-media-icons/<%= color %>/github.svg"
    onmouseover="this.src='images/social-media-icons/hover/github.svg'"
    onmouseout="this.src='images/social-media-icons/<%= color %>/github.svg'"
  />
</a>
<a
  href="https://open.spotify.com/user/1218307071?si=Ir3WJzehS9qQe-k_gaJpng"
  target="_blank"
>
  <img
    src="images/social-media-icons/<%= color %>/spotify.svg"
    onmouseover="this.src='images/social-media-icons/hover/spotify.svg'"
    onmouseout="this.src='images/social-media-icons/<%= color %>/spotify.svg'"
  />
</a>
<a
  href="https://www.yelp.com/user_details?userid=ktbe2eLWnfgu3afRmDIi3g"
  target="_blank"
>
  <img
    src="images/social-media-icons/<%= color %>/yelp.svg"
    onmouseover="this.src='images/social-media-icons/hover/yelp.svg'"
    onmouseout="this.src='images/social-media-icons/<%= color %>/yelp.svg'"
  />
</a>*/

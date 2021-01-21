import dynamic from "next/dynamic";

// black icons
const BlackEmail = dynamic(() =>
  import(`./icons/black/email.svg`).then(gh => {
    return gh;
  })
);

const BlackLinkedin = dynamic(() =>
  import(`./icons/black/linkedin.svg`).then(gh => {
    return gh;
  })
);

const BlackGithub = dynamic(() =>
  import(`./icons/black/github.svg`).then(gh => {
    return gh;
  })
);

//white icons
const WhiteEmail = dynamic(() =>
  import(`./icons/white/email.svg`).then(gh => {
    return gh;
  })
);

export default function Socials({ black }) {
  return (
    <section className="social-links <%= background %>">
      <a href="mailto:derekfoster94@gmail.com" target="_blank">
        {black ? <BlackEmail /> : <WhiteEmail />}
        <img
          src="images/social-media-icons/<%= color %>/email.svg"
          onmouseover="this.src='images/social-media-icons/hover/email.svg'"
          onmouseout="this.src='images/social-media-icons/<%= color %>/email.svg'"
        />
      </a>
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
      </a>
    </section>
  );
}

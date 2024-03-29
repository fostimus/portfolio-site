import BackgroundSection from "../BackgroundSection";
import Interests from "../Interests/Interests";
import styles from "./backgroundContainer.module.scss";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

const icons = [
  [
    <i className={"fas fa-basketball-ball"} />,
    { title: "Basketball", content: "" },
  ],
  [<i className="fas fa-biking" />, { title: "Athletics", content: "" }],
  [<i className="fab fa-spotify" />, { title: "Music", content: "" }],
  [<i className="fas fa-podcast" />, { title: "Podcaster", content: "" }],
  [<i className="fas fa-book-open" />, { title: "Reading", content: "" }],
  [
    <img
      className={`${styles.interest} `}
      src="/japanese-flag.svg"
      alt="Japan's National Flag"
    />,
    { title: "Japanese", content: "" },
  ],
];

export default function BackgroundContainer({ content }) {
  return (
    <div className={styles["bg-container4"]}>
      {content.map((section) => {
        return (
          <BackgroundSection
            className={styles["bg-section" + section.frontMatter.id]}
            key={section.title}
            title={section.title}
            content={section.content}
          />
        );
      })}

      {interestsContainer(icons.slice(0, icons.length / 2), "2")}

      <embed
        className={`${styles["bg-section3"]} ${styles.logo}`}
        src="/images/df-logo-transparent.svg"
      />
      {interestsContainer(icons.slice(icons.length / 2), "4")}
    </div>
  );
}

function interestsContainer(interests, pos) {
  return (
    <BackgroundSection
      className={styles[`bg-section${pos}`]}
      title="Interests"
      subtitle="Hover over each to learn more"
      vertical
    >
      {interests.map((item) => (
        <OverlayTrigger
          key={item[1].title}
          trigger={["hover", "focus"]}
          placement="right"
          overlay={popover(item[1].title, item[1].content)}
        >
          {item[0]}
        </OverlayTrigger>
      ))}
    </BackgroundSection>
  );
}

function popover(title, content) {
  return (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );
}

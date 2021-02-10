import BackgroundSection from "../BackgroundSection";
import Interests from "../Interests/Interests";
import styles from "./backgroundContainer.module.scss";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

const icons = [
  [
    <i className={`fas fa-basketball-ball`}></i>,
    { title: "Basketball", content: "" }
  ],
  [<i className="fas fa-biking"></i>, { title: "Athletics", content: "" }],
  [<i className="fab fa-spotify"></i>, { title: "Music", content: "" }],
  [<i className="fas fa-podcast"></i>, { title: "Podcaster", content: "" }],
  [<i className="fas fa-book-open"></i>, { title: "Reading", content: "" }],
  [
    <img className={`${styles.interest} `} src="/japanese-flag.svg" alt="" />,
    { title: "Japanese", content: "" }
  ]
];

export default function BackgroundContainer({ content }) {
  return (
    <div className={styles["bg-container4"]}>
      {content.map(section => {
        return (
          <BackgroundSection
            className={styles["bg-section" + section.frontMatter.id]}
            key={section.title}
            title={section.title}
            content={section.content}
          />
        );
      })}

      <embed
        className={`${styles["bg-section3"]} ${styles.logo}`}
        src="/images/df-logo-transparent.svg"
      />
      <BackgroundSection
        className={styles["bg-section4"]}
        title="Interests"
        subtitle="Hover over each to learn more"
        vertical
      >
        {icons.map(item => (
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
    </div>
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

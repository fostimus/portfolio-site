import styles from "./interests.module.scss";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Interests() {
  const content = [
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

  const popover = (title, content) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );
  return (
    <div className={styles.interestsContainer}>
      <div className={styles.tagline}>
        <h3>Interests</h3>
        <h6>Hover over each to learn more</h6>
      </div>
      <div className={styles.interests}>
        {content.map(item => (
          <OverlayTrigger
            key={item[1].title}
            trigger={["hover", "focus"]}
            placement="right"
            overlay={popover(item[1].title, item[1].content)}
          >
            {item[0]}
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );
}

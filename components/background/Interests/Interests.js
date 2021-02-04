import styles from "./interests.module.scss";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Interests() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  return (
    <>
      <Popover />
      <div className={styles.interests}>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="success">Click me to see</Button>
        </OverlayTrigger>
        <i className={`fas fa-basketball-ball`}></i>
        <i className="fas fa-biking"></i>
        <i className="fab fa-spotify"></i>
        <i className="fas fa-podcast"></i>
        <i className="fas fa-book-open"></i>
        <img
          className={`${styles.interest} `}
          src="/japanese-flag.svg"
          alt=""
        />
      </div>
    </>
  );
}

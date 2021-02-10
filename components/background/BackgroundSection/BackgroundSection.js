import styles from "./backgroundSection.module.scss";
import { Card } from "react-bootstrap";

export default function BackgroundSection({
  title,
  content,
  className,
  children
}) {
  return (
    <Card className={`${className} ${styles["bg-section"]}`}>
      {title ? (
        <Card.Body>
          <Card.Title>{title}</Card.Title>{" "}
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Card.Body>
      ) : (
        <Card.Body>{children}</Card.Body>
      )}
    </Card>
  );
}

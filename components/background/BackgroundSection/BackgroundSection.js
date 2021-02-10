import styles from "./backgroundSection.module.scss";
import { Card } from "react-bootstrap";

export default function BackgroundSection({ title, content, className }) {
  console.log(typeof content);
  return (
    <Card className={`${className} ${styles["bg-section"]}`}>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}

        {typeof content === "string" ? (
          <Card.Text dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <Card.Text>{content}</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

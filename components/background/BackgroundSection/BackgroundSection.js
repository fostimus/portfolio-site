import styles from "./backgroundSection.module.scss";
import { Card } from "react-bootstrap";

export default function BackgroundSection({
  title,
  subtitle,
  content,
  className,
  vertical,
  children
}) {
  return (
    <Card className={`${className} ${styles["bg-section"]}`}>
      {typeof content === "string" ? (
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{subtitle}</Card.Subtitle>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </Card.Body>
      ) : (
        <>
          {title && <Card.Title>{title}</Card.Title>}
          {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
          <Card.Body className={vertical && styles.vertical}>
            {children}
          </Card.Body>
        </>
      )}
    </Card>
  );
}

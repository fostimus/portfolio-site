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
    <div
      className={`${className} ${styles["bg-section"]} ${styles["flip-card"]}`}
    >
      <div className={styles.flip}>
        <Card className={styles.cardFront}>
          <Card.Title>{title}</Card.Title>
        </Card>
        <Card className={` ${styles.cardBack}`}>
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
      </div>
    </div>
  );
}

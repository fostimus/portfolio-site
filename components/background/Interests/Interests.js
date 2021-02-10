import styles from "./interests.module.scss";

export default function Interests({ className }) {
  const popover = (title, content) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>{content}</Popover.Content>
    </Popover>
  );
  return (
    <div className={`${className} ${styles.interestsContainer}`}>
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

import styles from "./backgroundSection.module.scss";

export default function BackgroundSection({ title, content }) {
  return (
    <div className={styles["bg-section"]}>
      {title ? <h2>{title}</h2> : <></>}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

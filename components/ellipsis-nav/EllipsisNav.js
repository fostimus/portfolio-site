import styles from "./ellipseNav.module.scss";

export default function EllipsisNav({ sections, currentSection }) {
  return (
    <div className={styles["ellipsis-nav"]}>
      {sections.map((section, index) =>
        index === currentSection ? (
          <Ellipse key={section} link={section} section={section} />
        ) : (
          <Ellipse key={section} link={section} />
        )
      )}
    </div>
  );
}

function Ellipse({ link, section }) {
  return (
    <div className={styles["ellipse-container"]}>
      <a className={styles.ellipse} href={"#" + link}></a>
      {section ? <span>{section}</span> : <></>}
    </div>
  );
}

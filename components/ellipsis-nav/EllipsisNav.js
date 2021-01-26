import styles from "./ellipseNav.module.scss";

export default function EllipsisNav({ sections, currentSection }) {
  return (
    <div className={styles["ellipsis-nav"]}>
      {sections.map(section =>
        section === currentSection ? (
          <Ellipse key={section} section={currentSection} />
        ) : (
          <Ellipse key={section} />
        )
      )}
    </div>
  );
}

function Ellipse({ section }) {
  return (
    <div className={styles["ellipse-container"]}>
      <a className={styles.ellipse} href={"#" + section}></a>
      {section ? <span>{section}</span> : <></>}
    </div>
  );
}

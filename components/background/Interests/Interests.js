// import "@fortawesome/fontawesome-free/css/all.css";
import styles from "./interests.module.scss";

export default function Interests() {
  return (
    <div className={styles.interests}>
      <i className={`${styles.interest} fas fa-basketball-ball`}></i>
      <i className="fas fa-biking"></i>
      <i className="fab fa-spotify"></i>
      <i className="fas fa-podcast"></i>
      <i className="fas fa-book-open"></i>
      <img className={`${styles.interest} `} src="/japanese-flag.svg" alt="" />
    </div>
  );
}

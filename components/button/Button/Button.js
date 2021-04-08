import styles from "./button.module.scss";

export default function Button({ text, link }) {
  return (
    <a className={styles.btn} href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

import styles from "./button.module.scss";

export default function Button({ text, link }) {
  return (
    <a class={styles.btn} href={link} target="_blank">
      {text}
    </a>
  );
}

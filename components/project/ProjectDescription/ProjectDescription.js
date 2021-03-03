import { useState, useEffect } from "react";
import ButtonContainer from "../../button/ButtonContainer";
import styles from "./projectDescription.module.scss";
const axios = require("axios");

export default function ProjectDescription({ title, id, date, buttons }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    // rate limits are pretty low for non-authenticated requests.
    const request = {
      method: "get",
      url: "https://api.github.com/repos/fostimus/" + id
      // headers: { "User-Agent": "fostimus" }
    };

    axios(request).then(response => {
      setDescription(response.data.description);
    });
  }, []);

  return (
    <div className={styles.desc}>
      <div className={styles["desc-action"]}>
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
      <p>{description}</p>
      <ButtonContainer buttons={buttons} />
    </div>
  );
}

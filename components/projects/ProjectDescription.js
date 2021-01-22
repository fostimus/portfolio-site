import React from "react";
import Button from "../button/Button";

export default function ProjectDescription({ title, date, buttons }) {
  return (
    <div class="desc">
      <div class="desc-action">
        <h2>{title}</h2>
        <h4>{date}</h4>
        <div class="btns-container">
          {buttons.map(button => (
            <Button text={button.text} link={button.link} />
          ))}
        </div>
      </div>
      <p></p>
    </div>
  );
}

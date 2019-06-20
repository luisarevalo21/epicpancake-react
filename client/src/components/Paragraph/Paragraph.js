import React from "react";
import classes from "./Paragraph.module.css";
const paragraph = props => (
  <div className={classes.Paragraph}>
    <h3>{props.title}</h3>
    <p>
      {props.details}
      <a href={props.link}>{props.text}</a>
    </p>
  </div>
);

export default paragraph;

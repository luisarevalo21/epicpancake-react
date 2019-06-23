import React from "react";
import classes from "./ListBuilder.module.css";

const listBuilder = props => {
  console.log(props.list);
  let list = null;
  list = props.list.map(element => {
    if (
      element[6].trim() ===
      "My friend will play for me (enter their name in the comment)"
    ) {
      return (
        <li>
          {element[0].trim() +
            ", " +
            element[1].trim() +
            ", " +
            element[3].trim() +
            ", " +
            "via proxy"}
        </li>
      );
    } else if (
      element[6].trim() ===
      "I need someone to play for me (add your telegram name in the comments so an admin can contact you)"
    ) {
      return (
        <li>
          {element[0].trim() +
            ", " +
            element[1].trim() +
            ", " +
            element[3].trim() +
            ", " +
            "needs proxy"}
        </li>
      );
    } else {
      return (
        <li>
          {element[0].trim() +
            ", " +
            element[1].trim() +
            ", " +
            element[3].trim()}
        </li>
      );
    }
  });

  return (
    <div className={[classes.List, "container"].join(" ")}>
      <ul>{list} </ul>
    </div>
  );
};
export default listBuilder;

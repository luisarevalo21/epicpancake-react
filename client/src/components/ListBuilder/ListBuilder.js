import React from "react";
import classes from "./ListBuilder.module.css";
import Logo from "../Logo/Logo";
import ValorImage from "../../assets/images/Team_Valor.png";
const listBuilder = props => {
  //   console.log("the string is", props.text);
  //   const test = group => {
  //     console.log("group is", group);
  //     props.test(group);
  //   };

  //   const childFunction = dataFromChild => {
  //     props.test(dataFromChild);
  //   };
  //   console.log("the props are", props);
  let list = null;
  let group = props.team + "\n";

  //   props.text += props.Team;

  if (props.list.length !== 0) {
    list = props.list.map(element => {
      if (
        element[6].trim() ===
        "My friend will play for me (enter their name in the comment)"
      ) {
        group +=
          element[0].trim() +
          ", " +
          element[1].trim() +
          ", " +
          element[3].trim() +
          ", " +
          "via proxy" +
          "\n";
        return (
          <li key={element[0]}>
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
        group +=
          element[0].trim() +
          ", " +
          element[1].trim() +
          ", " +
          element[3].trim() +
          ", " +
          "needs proxy" +
          "\n";
        return (
          <li key={element[0]}>
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
        group +=
          element[0].trim() +
          ", " +
          element[1].trim() +
          ", " +
          element[3].trim() +
          " \n";
        return (
          <li key={element[0]}>
            {element[0].trim() +
              ", " +
              element[1].trim() +
              ", " +
              element[3].trim()}
          </li>
        );
      }
    });
    // childFunction(group);
  } else {
    // console.log("inside the else");
    group += "No " + props.team + "\n";
    // console.log("group is", group);
    // childFunction(group);
    return (
      <div
        className={[classes.List, "container"].join(" ")}
        onChange={props.test(group)}
      >
        <ul>
          <li key={Math.random()}>No {props.team}</li>
        </ul>
      </div>
    );
  }

  return (
    <div
      className={[classes.List, "container"].join(" ")}
      onChange={props.test(group)}
    >
      {/* <Logo src={ValorImage} type="team" /> */}
      <ul>{list} </ul>
    </div>
  );
};
export default listBuilder;

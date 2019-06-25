import React from "react";
import image from "../../assets/images/ep-logo-green.svg";
import classes from "./Logo.module.css";
import Image from "react-bootstrap/Image";

const logo = props => {
  switch (props.type) {
    case "logo":
      return <Image src={image} alt="logo" className={classes.Logo} />;
    case "team":
      return <Image src={props.src} alt="logo" className={classes.TeamLogo} />;
  }
};

export default logo;

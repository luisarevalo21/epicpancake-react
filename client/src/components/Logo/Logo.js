import React from "react";
import image from "../../assets/images/ep-logo-green.svg";
import classes from "./Logo.module.css";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
const logo = props => {
  //remove link to nav link incase
  switch (props.type) {
    case "logo":
      return (
        <Link to="/">
          <Image src={image} alt="logo" className={classes.Logo} />
        </Link>
      );
    case "team":
      return <Image src={props.src} alt="logo" className={classes.TeamLogo} />;
  }
};

export default logo;

import React from "react";
import image from "../../assets/images/ep-logo-green.svg";
import classes from "./Logo.module.css";

const logo = props => <img src={image} alt="logo" className={classes.Logo} />;

export default logo;

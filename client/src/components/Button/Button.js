import React from "react";
import classes from "./Button.module.css";
import ReactTooltip from "react-tooltip";
import Overlay from "react-bootstrap/Overlay";
import { Tooltip } from "react-tippy";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const button = props => {
  switch (props.type) {
    case "signup":
      return (
        <>
          <button className={classes.Button} onClick={props.clicked}>
            Sign Up
          </button>
        </>
      );
    case "copy":
      return (
        <>
          {/* <button onClick={props.clicked}>Copy</button> */}
          <Tooltip
            // options
            title="Copied"
            position="bottom"
            trigger="click"
            delay={[0, 3000]}
          >
            <button className={classes.Button} onClick={props.clicked}>
              Copy
            </button>
          </Tooltip>
          {/* <OverlayTrigger
    trigger="click"
    placement="right"
    className={classes.popover}
    onHide={() => console.log("hiding")}
    overlay={<Tooltip id="popover-contained">Copied</Tooltip>}
    delay="2000"
  >
    <button className={classes.Button} onClick={props.clicked}>
      Copy
    </button>
  </OverlayTrigger> */}
          {/* <ReactTooltip id="clickme" place="right" clickable={true}>
    {tooltip}
  </ReactTooltip> */}
        </>
      );
  }
};

export default button;

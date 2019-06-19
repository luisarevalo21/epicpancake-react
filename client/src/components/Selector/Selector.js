import React from "react";
import Select from "react-select";
import classes from "./Selector.module.css";
const options = [
  { value: "-", label: "-" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isDisabled ? "bold" : null,
    color: state.isDisabled ? "black" : null
  })
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 1 : 0.5;

  //     return { ...provided, opacity };
  //   }
};
const selector = props => {
  let input = null;
  switch (props.type) {
    case "input":
      input = (
        <div>
          <label style={{ color: "#6c7d8e" }}>{props.label}</label>
          <Select
            options={props.options}
            onChange={props.changed}
            value={props.selected}
            styles={customStyles}
            className={classes.Select}
          />
        </div>
      );
      break;

    case "time":
      input = (
        <div>
          <label style={{ color: "#6c7d8e" }}>{props.label}</label>
          {/* <div className="form-group"> */}
          <input
            type="time"
            className="form-control"
            placeholder="Time"
            required=""
            data-fillr-id="1465670472"
            data-fillr="bound"
            autoComplete="off"
            onChange={props.changed}
          />
        </div>
      );
  }

  return <div className={classes.Selector}>{input}</div>;
};
export default selector;

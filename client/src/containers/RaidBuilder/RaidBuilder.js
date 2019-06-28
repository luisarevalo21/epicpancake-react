import React, { Component } from "react";
import Selector from "../../components/Selector/Selector";
import Button from "../../components/Button/Button";
import "./RaidBuilder.css";
import Tabletop from "tabletop";
import copy from "copy-to-clipboard";

class RaidBuilder extends Component {
  state = {
    pokemonOptions: [],
    gymOptions: [],
    time: "",
    selectedRaidBoss: null,
    selectedGym: null,
    coordiantes: null,
    copied: false,
    copyString: "",
    api:
      "https://docs.google.com/spreadsheets/d/1DQUjeYhEBRemcZObEKBj-QvxISX-sVUpbY8yPadg7BY/edit?usp=sharing"
  };

  componentDidMount() {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1DQUjeYhEBRemcZObEKBj-QvxISX-sVUpbY8yPadg7BY/edit?usp=sharing",
      callback: this.showInfo,
      simpleSheet: true
    });
  }
  showInfo = (data, tabletop) => {
    let pokemon = tabletop.sheets("Pokemon List").toArray();
    // console.log("the pokemon are ", pokemon);
    let pokemonOptions = pokemon.map(element => {
      return { label: element, value: element };
    });
    let gyms = tabletop.sheets("Coords").toArray();
    // console.log("the gys are", gyms);
    // let gyms = [];
    // this.setState({ gymOptions: data });
    let gymOptions = gyms.map(element => {
      //   console.log("the element is ", element[0]);

      if (element[1] === "") {
        return {
          label: element[0],
          isDisabled: true
          //   style: "bold"
        };
      }
      return {
        value: element[0],
        label: element[0],
        coordinates: element[1]
      };
      //   console.log("element", element["N/A"]);
      //   console.log("inside the map ");
      //   if (element["N/A"] === "") {
      //     console.log("insid ethe if");
      //     return {
      //       label: element["Blank Entry"],
      //       isDisabled: true
      //       //   style: "bold"
      //     };
      //   }

      //   gyms.push({
      //     value: element["Blank Entry"],
      //     label: element["Blank Entry"]
      //   });
      //   console.log(element["Blank Entry"]);
    });
    this.setState({ gymOptions: gymOptions, pokemonOptions: pokemonOptions });
  };

  configuringTime = currentTime => {
    const time = currentTime.split(":");
    if (time[0] > 12) {
      time[0] = time[0] - 12;
    }
    console.log(time);
    return time[0] + ":" + time[1];
  };
  handleChange = (key, selectedOption) => {
    // console.log("the key is", key);
    // console.log("the seelcted option is", selectedOption);

    // console.log("the option is", selectedOption.value[0]);
    switch (key) {
      case "time":
        this.setState({ [key]: selectedOption.target.value, copied: false });
        break;
      case "selectedRaidBoss":
        this.setState({ [key]: selectedOption.value[0], copied: false });
        break;
      case "selectedGym":
        this.setState({
          [key]: selectedOption.value,
          coordiantes: selectedOption.coordinates,
          copied: false
        });
        break;
    }
    // console.log("inside the handle change", selectedOption);
    // if (key === "time") {
    //   this.setState({ [key]: selectedOption.target.value });
    // } else {
    //   this.setState({ [key]: selectedOption });
    // }
  };
  copyString = () => {
    this.setState({ copied: true });
  };
  handleClick = () => {
    // console.log("the selected raid boss is", this.state.selectedGym);
    const time = this.configuringTime(this.state.time);
    console.log("the time is", time);
    let copyString = "/newraid ";
    copyString +=
      this.state.selectedRaidBoss +
      " at " +
      this.state.selectedGym +
      " " +
      time +
      " " +
      this.state.coordiantes;
    console.log(copyString);
    this.setState({ copyString: copyString, copied: true });
  };
  render() {
    // console.log("this.state.copystring", this.state.copied);

    if (this.state.copyString) {
      copy(this.state.copyString, {
        debug: true,
        message: null
      });
    }

    // const options = [
    //   { optgroup: "Things", value: "thing1", label: "Thing 1" },
    //   { optgroup: "Things", value: "thing2", label: "Thing 2" },
    //   { optgroup: "Things", value: "thing3", label: "Thing 3" },
    //   { optgroup: "Stuffs", value: "stuff1", label: "Stuff 1" },
    //   { optgroup: "Piles", value: "pile1", label: "Pile 1" },
    //   { value: "pile1", label: "Pile 1" }
    // ];
    return (
      <div>
        <Selector
          label="Raid Boss"
          changed={val => this.handleChange("selectedRaidBoss", val)}
          value={this.state.selectedRaidBoss}
          options={this.state.pokemonOptions}
          type="input"
        />
        <Selector
          label="Gym"
          changed={val => this.handleChange("selectedGym", val)}
          value={this.state.selectedGym}
          options={this.state.gymOptions}
          type="input"
        />
        <Selector
          label="Start Time"
          changed={val => this.handleChange("time", val)}
          value={this.state.time}
          //   options={options}
          type="time"
        />
        {/* <Tooltip
          // options
          title="Welcome to React"
          position="right"
          trigger="click"
          delay={[0, 3000]}
        >
          <button>Click here to show popup</button>
        </Tooltip> */}
        <Button clicked={this.handleClick} type="copy"/>
        {/* <label style={{ color: "#6c7d8e" }}>Start Time</label>
        {/* <div className="form-group"> */}
        {/* <input
          type="time"
          className="form-control"
          placeholder="Time"
          required=""
          data-fillr-id="1465670472"
          data-fillr="bound"
          autoComplete="off"
          onChange={val => this.handleChange("time", val)}
        />{" "} */}
        */}
        {/* </div> */}
        {/* <Selector
          label="Start Time"
          changed={this.handleChanged}
          selected={this.state.selectedOption}
          type="time"
        /> */}
        {/* <CopyToClipboard text={copyString}> */}
        {/* <Button clicked={this.handleClick} /> */}
        {/* <Tooltip position="bottom" trigger="click" id="tooltip"> */}
        {/* <Button clicked={this.handleClick} /> */}
        {/* <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={<Tooltip id="overlay-example"> Copied</Tooltip>}
        >
          <button variant="secondary" data-delay='{"show":"500", "hide":"100"}'>
            Popover on clicked
          </button>
        </OverlayTrigger> */}
        {/* <Button clicked={this.handleClick} /> */}
        {/* <button data-tip="Copied" event="click">
          Click
        </button>
        <ReactTooltip delayHide={0}>
          <p>copied</p>
        </ReactTooltip> */}
        {/* <Button data-tip data-for="clickme" data-event="click">
          copy
        </Button>
        <ReactTooltip
          id="clickme"
          place="right"
          effect="solid"
          clickable={true}
        >
          <p>copied</p>
        </ReactTooltip> */}
        {/* <Button clicked={this.handleClick} isHidden={this.copied} /> */}
        {/* <Button clicked={this.handleClick} /> */}
        {/* </Tooltip> */}
        {/* <Overlay show={show} placement="right">
          <Tooltip>Copied</Tooltip>
        </Overlay>
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger> */}
        {/* </CopyToClipboard> */}
      </div>
    );
  }
}

export default RaidBuilder;

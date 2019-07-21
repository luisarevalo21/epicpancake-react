import React, { Component } from "react";
import Selector from "../../components/Selector/Selector";
import Tabletop from "tabletop";
import GoogleMapReact from "google-map-react";
import classes from "./GymFinder.module.css";

class GymFinder extends Component {
  state = {
    gymOptions: [],
    selectedGym: null,
    selectedGymCoordinates: "",
    selectedGymLink: ""
  };

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  componentDidMount() {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1DQUjeYhEBRemcZObEKBj-QvxISX-sVUpbY8yPadg7BY/edit?usp=sharing",
      callback: this.showInfo,
      simpleSheet: true
    });
  }

  handleChange = (key, selectedOption) => {
    console.log("selected option", selectedOption);

    const link =
      "http://www.google.com/maps/place/" + selectedOption.coordinates;

    this.setState({
      [key]: selectedOption.value,
      selectedGymCoordinates: selectedOption.coordinates,
      selectedGymLink: link
    });

    console.log("changed occured");
  };
  showInfo = (data, tabletop) => {
    let gyms = tabletop.sheets("Coords").toArray();
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
    });
    this.setState({ gymOptions: gymOptions });
  };
  render() {
    // const AnyReactComponent = ({ text }) => <div>{text}</div>;
    // console.log("this state", this.state.selectedGymCoordinates);
    return (
      <div>
        <Selector
          type="input"
          options={this.state.gymOptions}
          label="Gym"
          value={this.state.selectedGym}
          changed={val => this.handleChange("selectedGym", val)}
        />

        <a
          href={this.state.selectedGymLink}
          target="_blank"
          className={classes.SelectGymLink}
        >
          {this.state.selectedGym}
        </a>

        {/* <div style={{ width: "100%", height: "50vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCJDjV4MIrjB9iBfGps4EsWnSMOmUcbkaQ"
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact> */}
        {/* </div> */}
      </div>
    );
  }
}

export default GymFinder;

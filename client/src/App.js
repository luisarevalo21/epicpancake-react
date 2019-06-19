import React, { Component } from "react";
import logo from "./logo.svg";
import RaidBuilder from "./containers/RaidBuilder/RaidBuilder";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";

class App extends Component {
  // state = {
  //   pokemonOptions: [],
  //   gymOptions: [],
  //   time: "",
  //   selectedRaidBoss: null,
  //   selectedGym: null,

  //   copyValue: []
  // };

  // handleChange = (key, selectedOption) => {
  //   console.log("inside the handle change", selectedOption);
  //   if (key === "time") {
  //     this.setState({ [key]: selectedOption.target.value });
  //   } else {
  //     this.setState({ [key]: selectedOption.value });
  //   }
  // };

  // handleRaidBossChange = selectedRaidBoss => {
  //   // console.log("the event is ", event.value);
  //   this.setState({
  //     selectedRaidBoss: selectedRaidBoss.value,
  //     copyValue: selectedRaidBoss
  //   });
  // };
  // handleGymChange = selectedGym => {
  //   // console.log("the event is ", event.value);
  //   this.setState({
  //     selectedGym: selectedGym,
  //     copyValue: selectedGym
  //   });
  // };
  // {/* //toolbar
  // //search bar
  // //search bar
  // // <Selector />
  // //search bar */}
  render() {
    return (
      //either keep the container or use media queries to reduce the size depended on screensize
      <div>
        {/* <Navbar>
          <img src={image} />
        </Navbar> */}

        <Navbar />
        <Switch>
          <Route exact path="/" component={RaidBuilder} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;

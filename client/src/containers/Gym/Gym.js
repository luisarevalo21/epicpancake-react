import React, { Component } from "react";
import Tabletop from "tabletop";
import classes from "./Gym.module.css";
import ListBuilder from "../../components/ListBuilder/ListBuilder";
class Gym extends Component {
  state = {
    // id: this.props.match.params.gymId,
    data: [],
    date: "",
    time: "",
    instinctList: [],
    valorList: [],
    mysticList: []
  };

  componentDidMount() {
    console.log("the id is", this.props.match.params.gymId);

    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM/edit?usp=sharing",
      callback: this.showInfo,
      simpleSheet: true
    });
  }
  showInfo = (data, tabletop) => {
    console.log("the id is", this.props.match.params.gymId);
    const array = tabletop.sheets(this.props.match.params.gymId).toArray();
    const date = array[0][4];
    const time = array[0][5];
    const instinctList = array.filter(element => element[2] === "Instinct");
    const valorList = array.filter(element => element[2] === "Valor");
    const mysticList = array.filter(element => element[2] === "Mystic");

    console.log(array[0][0]);
    this.setState({
      data: array,
      date,
      time,
      instinctList,
      valorList,
      mysticList
    });
  };

  render() {
    // console.log("the id is", this.state.data[0]);
    // let date = this.state.data[0];
    // this.state.data.map(element => {
    //   date = element[4];
    //   time = element[5];
    // });
    return (
      <div>
        <h1 className={classes.Gym}>{this.props.match.params.gymId}</h1>
        <div className={classes.List}>
          <span className={classes.Gym_date_time}>{this.state.date}</span>
          <span className={classes.Gym_date_time}>{this.state.time}</span>
          <div className={[classes.List, classes.InstinctList].join(" ")}>
            <ListBuilder list={this.state.instinctList} />
          </div>
          <div className={[classes.List, classes.MysticList].join(" ")}>
            <ListBuilder list={this.state.mysticList} />
          </div>
          <div className={[classes.List, classes.ValorList].join(" ")}>
            <ListBuilder list={this.state.valorList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gym;

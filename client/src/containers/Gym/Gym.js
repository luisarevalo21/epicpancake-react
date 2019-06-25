import React, { Component } from "react";
import Tabletop from "tabletop";
import classes from "./Gym.module.css";
import ListBuilder from "../../components/ListBuilder/ListBuilder";
import Spinner from "../../components/Spinner/Spinner";
import Modal from "../Modal/Modal";
import ValorLogo from "../../assets/images/Team_Valor.png";
import Logo from "../../components/Logo/Logo";
import MysticLogo from "../../assets/images/Team_Mystic.png";
import InstinctLogo from "../../assets/images/Team_Instinct.png";

class Gym extends Component {
  state = {
    // id: this.props.match.params.gymId,
    data: [],
    date: "",
    time: "",
    instinctList: [],
    valorList: [],
    mysticList: [],
    loading: true
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
    const array = tabletop.sheets(this.props.match.params.gymId).toArray();
    console.log("the array is", array);
    if (array.length !== 0) {
      console.log("the id is", this.props.match.params.gymId);
      // const array = tabletop.sheets(this.props.match.params.gymId).toArray();
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
        mysticList,
        loading: false
      });
    }
    this.setState({ loading: false });
  };

  render() {
    let gyms = (
      <>
        {/* <h1 className={classes.Gym}>{this.props.match.params.gymId}</h1> */}
        <div className={classes.List}>
          <span className={classes.Gym_date_time}>{this.state.date}</span>
          <span className={classes.Gym_date_time}>{this.state.time}</span>
          <div className={[classes.List, classes.InstinctList].join(" ")}>
            <Logo src={InstinctLogo} type="team" />
            <ListBuilder list={this.state.instinctList} team="Instinct" />
          </div>
          <div className={[classes.List, classes.MysticList].join(" ")}>
            <Logo src={MysticLogo} type="team" />
            <ListBuilder list={this.state.mysticList} team="Mystic" />
          </div>
          <div className={[classes.List, classes.ValorList].join(" ")}>
            {/* <Logo src={ValorLogo} type="team" /> */}
            <ListBuilder list={this.state.valorList} team="Valor" />
          </div>
        </div>
      </>
    );
    if (this.state.loading) {
      //change to just a spinner if need be
      gyms = <Modal show={this.state.loading} />;
    }
    // console.log("the id is", this.state.data[0]);
    // let date = this.state.data[0];
    // this.state.data.map(element => {
    //   date = element[4];
    //   time = element[5];
    // });
    return (
      <div>
        <h1 className={classes.Gym}>{this.props.match.params.gymId}</h1>
        {gyms}
      </div>
    );
  }
}

export default Gym;

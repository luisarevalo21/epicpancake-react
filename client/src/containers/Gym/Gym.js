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
import Button from "../../components/Button/Button";
import copy from "copy-to-clipboard";

let myFinalString = "";

class Gym extends Component {
  state = {
    // id: this.props.match.params.gymId,
    data: [],
    date: "",
    time: "",
    instinctList: [],
    valorList: [],
    mysticList: [],
    loading: true,
    copyString: "",
    copied: false
  };

  componentDidMount() {
    console.log("the id is", this.props.match.params.gymId);
    console.log("componentdid mount");
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM/edit?usp=sharing",
      callback: this.showInfo,
      simpleSheet: true
    });
  }

  handleClick = () => {
    // copyToClicpboard = e => {
    this.refs.input.select();
    // console.log("this .refs", this.refs);
    // this.setState({ copied: true });
    document.execCommand("copy");
    return false;
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const copy = { ...this.state };
  //   console.log("previous props is", prevState);
  //   console.log("the current state is", this.state);
  //   // if (prevProps.copy !== this.props.data) {
  //   //   this.chart = c3.load({
  //   //     data: this.props.data
  //   //   });
  //   console.log("final string in componenet did update", myFinalString);

  //   if (copy.copyString.contains(prevState.copyString)) {
  //     copy.copyString += myFinalString;
  //     this.setState({ copyString: copy.copyString });
  //   }
  //   // const copyState = { ...this.state };
  //   // console.log("this.copystring", this.copyString());
  //   // console.log(
  //   //   "the copy string in compondent did update is",
  //   //   copyState.copyString
  //   // );
  //   // // console.log("the current copy string is", this.state.copyString);
  //   // // console.log("prev props are", prevState);
  //   // if (prevState.copyString !== this.state.copyString) {
  //   //   console.log("isnide the if");
  //   //   // console.log("this.state.copystring", this.state.copyString);
  //   //   // this.setState({ copyString: copyString });
  //   // }
  // }
  copyString = dataFromChild => {
    console.log("the data from child is", dataFromChild);
    let copy = this.state.copyString;
    if (!copy.includes(dataFromChild)) {
      copy += dataFromChild + "\n";
      console.log("my final string", myFinalString);
      this.setState({ copyString: copy });
    }
    // myFinalString += dataFromChild;
    // console.log("my final string", myFinalString);

    // console.log("the data from child is", dataFromChild);
    // console.log("copystate.copystring", copyState.copyString);
    // // let copyString = "";
    // // if (prevState !== copyState) {
    // console.log("inside the if");
    // console.log("the data from the child is", dataFromChild);

    // copyState.copyString += dataFromChild;
    // console.log("copystate", copyState.copyString);
    // copyString += dataFromChild + " \n";
    // myFinalString = copyString;
    // this.setState({ copyString: copyState.copyString });

    // console.log("the copy string before return is", copyString);
    // let copy = "";
    // myFinalString += copyString;
    // return copyString;
    // copy += dataFromChild + " \n";
    // console.log("the final copy is", copy);
    // console.log("MY FINAL STRING IS", copyString);
    // this.setState({ copyString: myFinalString });
    // myString = myFinalString;
    // console.log("MY STRING", myString);
    // this.setState({ copyString: copy });
    //}
    // console.log("the data from the child is", copy);
    // return copy;
    // this.setState({ copyString: copy });

    //setstate afterwards
  };
  showInfo = (data, tabletop) => {
    const array = tabletop.sheets(this.props.match.params.gymId).toArray();
    // console.log("the array is", array);
    let copyString = "";
    if (array.length !== 0) {
      copyString += this.props.match.params.gymId + "\n";
      // copyString += this.props.match.params.gymId + "\n";
      // console.log("the id is", this.props.match.params.gymId);
      // const array = tabletop.sheets(this.props.match.params.gymId).toArray();
      const date = array[0][4];
      copyString += date + "\n";
      const time = array[0][5];
      copyString += time + "\n";
      // console.log("the copy string is", copyString);
      const instinctList = array.filter(element => element[2] === "Instinct");
      const mysticList = array.filter(element => element[2] === "Mystic");
      const valorList = array.filter(element => element[2] === "Valor");
      // console.log("MY FINAL STRING", copyString);

      // console.log("the valor list is", valorList);
      // console.log(array[0][0]);
      this.setState({
        data: array,
        date,
        time,
        instinctList,
        valorList,
        mysticList,
        loading: false,
        //change final string
        copyString: myFinalString
      });
    } else {
      this.setState({ loading: false, copyString: copyString });
    }
  };

  render() {
    console.log("my final string ins render ", this.state.copyString);

    // if (this.state.copied) {
    //   copy(this.state.copyString, {
    //     debug: true,
    //     message: null
    //   });
    // }
    // console.log("the copystring is", myFinalString);
    // this.copyString();
    let gyms = (
      <>
        {/* <h1 className={classes.Gym}>{this.props.match.params.gymId}</h1> */}
        <div className={classes.List}>
          <span className={classes.Gym_date_time}>{this.state.date}</span>
          <span className={classes.Gym_date_time}>{this.state.time}</span>
          <div className={[classes.List, classes.InstinctList].join(" ")}>
            <Logo src={InstinctLogo} type="team" />
            <ListBuilder
              list={this.state.instinctList}
              team="Instinct"
              // text={this.state.copyString}
              test={this.copyString}
            />
          </div>
          <div className={[classes.List, classes.MysticList].join(" ")}>
            <Logo src={MysticLogo} type="team" />
            <ListBuilder
              list={this.state.mysticList}
              team="Mystic"
              // text={this.state.copyString}
              test={this.copyString}
            />
          </div>
          <div className={[classes.List, classes.ValorList].join(" ")}>
            <Logo src={ValorLogo} type="team" />
            <ListBuilder
              list={this.state.valorList}
              team="Valor"
              // text={this.state.copyString}
              test={this.copyString}
            />
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
      <div className="container">
        <h1 className={classes.Gym}>{this.props.match.params.gymId}</h1>
        <textarea
          className={classes.Raidlist}
          ref="input"
          type="text"
          value={this.state.copyString}
        />
        {gyms}

        <Button clicked={this.handleClick}>Copy</Button>
      </div>
    );
  }
}

export default Gym;

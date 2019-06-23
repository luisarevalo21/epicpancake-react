import React, { Component } from "react";
import classes from "./ExGyms.module.css";
import { Link } from "react-router-dom";
import Tabletop from "tabletop";

class ExGyms extends Component {
  state = {
    gyms: [
      {
        name: "Can You Hear There (Woodfield)",
        listName: "Can You Hear There, Hercules (Lupine Road, Park)"
      },
      {
        name: "Country Club Vist Park Dedication Plaque",
        listName: "Country Club Vist Park Dedication Plaque, Richmond"
      },
      {
        name: "Ever Burning Flame (Fernandez Park)",
        listName: "Ever Burning Flame, Pinole (Fernandez Park)"
      },
      {
        name: "Fountain of the Bells",
        listName: "Fountain of the Bells, San Pablo"
      },
      {
        name: "Hazel Downer Thorton Memorial Grove (Dog Park)",
        listName:
          "Hazel Downer Thorton Memorial Grove, Pinole (Pinole Valley dog park)"
      },
      {
        name: "Lamoine (Cheese) Park",
        listName: "Lamoine Park, Richmond (Cheese Park)"
      },
      { name: "Lefty Gomez", listName: "Lefty Gomez Plaque, Rodeo" },
      {
        name: "Pinole Point Business Park Fountain A",
        listName: "Pt. Pinole Business Park Fountain, Richmond"
      },
      {
        name: "Pinole Rotary Club (Louis Francis)",
        listName: "Pinole Rotary Club, Pinole (Marlesta Rd)"
      },
      { name: "Pinole Valley Park", listName: "Pinole Valley Park, Pinole" },
      {
        name: "Playground (Refugio)",
        listName: "Playground, Hercules (Refugio Park)"
      },
      {
        name: "Starbucks (Richmond Parkway)",
        listName: "Starbucks, Richmond Parkway location"
      },
      {
        name: "Starbucks (San Pablo Dam Road)",
        listName: "Starbucks, San Pablo Dam Rd. location (El Sob/San Pablo)"
      }
    ],
    active_gyms: []
  };

  componentDidMount() {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/15mSqg-uGZTmQBEu_hqvNzaCiSPGi8JapuV46WmsDRvM/edit?usp=sharing",
      callback: this.showInfo,
      simpleSheet: true
    });
  }

  showInfo = (data, tabletop) => {
    const active = [];
    this.state.gyms.map(element => {
      if (tabletop.sheets(element.listName).toArray().length !== 0) {
        active.push(element.listName);
      }
    });
    this.setState({ active_gyms: active });

    // this.state.gyms.map(elemenet => {
    //   active.push(elemenet);
    // });

    // this.setState({ active_gyms: active });
  };
  handleClick = () => {
    window.location.href = "https://goo.gl/forms/5fhu41K2qYhgkeTx2";
  };
  render() {
    const list = this.state.gyms.map(element => {
      const names = this.state.active_gyms.includes(element.listName)
        ? `${classes.newStyle}`
        : "";
      console.log(names);
      const gymName = element.listName;
      return (
        <li>
          <Link
            to={`ex/${gymName}`}
            className={names}
            // className={` ${
            //   this.state.active_gyms.includes(element.listName)
            //     ? "classes.newStyle"
            //     : ""
            // }`}
          >
            {element.name}
          </Link>
        </li>
      );

      //     <li
      //       className={
      //         this.state.active_gyms.includes(element.listName)
      //           ? classes.newStyle
      //           : ""
      //       }
      //     >
      //       {element.name}
      //     </li>
      //   </Link>
    });

    return (
      <div className={classes.ExGyms}>
        <h1>Ex Raid Gyms</h1>
        <ul>{list}</ul>
        <div className={classes.Button_Div}>
          {/* <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfYRLhE5BUMlLOGo9Jykq023zLSYnFXTFamf0uKg6x8teRl4w/viewform"> */}
          <button className={classes.Button} onClick={this.handleClick}>
            Sign Up
          </button>
          {/* </Link> */}
        </div>
        <a href="https://telegra.ph/PokeRaiderBot-09-16">
          To learn more about @PokeRaiderBot and what commands you can use,
          click here.
        </a>
      </div>
    );
  }
}

// <ul id="location-list" class="w3-container">
//     <li><a href="Can_You_Hear_Me.html" id="Woodfield">Can You Hear There (Woodfield)</a></li>
//     <li><a href="Country.html" id="Country">Country Club Vist Park Dedication Plaque</a></li>
//     <li><a href="Ever_Burning.html" id="Fernandez">Ever Burning Flame (Fernandez Park)</a></li>
//     <li><a href="Fountain_Of_Bells.html" id="Fountain">Fountain of the Bells</a></li>
//     <li><a href="Hazel_Downer.html" id="Hazel">Hazel Downer Thorton Memorial Grove (Dog Park)</a></li>
//     <li><a href="Lamoine_Park.html" id="Lamoine">Lamoine (Cheese) Park</a></li>
//     <li><a href="Left_Gomez.html" id="Lefty">Lefty Gomez</a></li></li>
//     <li><a href="Pinole_Business_Foutain.html" id="Pinole_Point">Pinole Point Business Park Fountain A</a></li>
//     <li><a href="Pinole_Rotary.html" id="Rotary">Pinole Rotary Club (Louis Francis)</a></li>
//     <li><a href="Pinole_Valley_Park.html" id="PVP">Pinole Valley Park</a></li>
//     <li><a href="Playground.html" id="Playground">Playground (Refugio)</a></li>
//     <li><a href="Starbucks_Richmond_Parkway.html" id="Starbucks_Richmond">Starbucks (Richmond Parkway)</a></li>
//     <li><a href="Starbucks_Dam_Road.html" id="Starbucks_SanPablo">Starbucks (San Pablo Dam Road)</a></li>
// </ul>
export default ExGyms;

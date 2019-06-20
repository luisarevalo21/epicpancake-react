import React, { Component } from "react";
import classes from "./Welcome.module.css";
import Paragraph from "../../components/Paragraph/Paragraph";

class Welcome extends Component {
  state = {
    admins: [
      { name: "@Pokedot / Lily 🔥40", link: "https://t.me/Pokedot" },
      {
        name: "@SunkenDemon / Raymond ⚡️40",
        link: "https://t.me/SunkenDemon"
      },
      { name: "@Donjuan0236 / Juan 🔥40", link: "https://t.me/Donjuan0236" },
      {
        name: "@ChicagoPeace / Dave N ❄️40",
        link: "https://t.me/ChicagoPeace"
      },
      { name: "@TorenaOne / Oné ⚡️36", link: "" },
      { name: "@KillaKyla / Kyla 🔥40", link: "https://t.me/killakyla" },
      { name: "@Luisarevalo21 / Luis A ❄️40", link: "" },
      { name: "Katie 🔥38", link: "" },
      { name: "@SteveHella / Steven ❄️40", link: "https://t.me/SteveHella" },
      { name: "@Ghardhar / Gary 🔥40", link: "https://t.me/Ghardhar" },
      { name: "@VivaLasViolence / Ian G 🔥40", link: "https://t.me/" },
      { name: "@PookieMom / Marianne 🔥40", link: "https://t.me/PookieMom" }
    ]
  };
  render() {
    const { admins } = this.state;
    return (
      <div className={classes.Welcome}>
        <h1 className={classes.Header}>C/R/H/P Welcome</h1>
        <Paragraph details="Hello and welcome to the C/R/H/P PoGo group! Our group, comprised of friendly and enthusiastic Pokemon Go players located in the greater Pinole area, meet up frequently to do raids, lure parties, community days, and now monthly PVP tournaments!" />
        <Paragraph details="We use the messaging app Telegram to communicate which can be downloaded here: Apple Google" />
        <Paragraph details="Once Telegram is installed simply follow the links below for the handful of chats that our group uses. We have 5 main chat channels set up to help information flow in an organized way." />
        <Paragraph
          details="Our main chat channel. Used mostly to call out raids, talk about the
          game, and share information. "
          title="CHRP Chat"
          link="https://t.me/joinchat/GMGPjELSHkMxOBBM9u-fJA"
          text="https://t.me/joinchat/GMGPjELSHkMxOBBM9u-fJA"
        />
        <Paragraph
          details="Used only for posting (and RSVPing to) verified raids. No chatting. "
          title="Roll & Pin Tracker"
          link="https://t.me/joinchat/GMGPjERr5AohCNVe7VykMw"
          text="https://t.me/joinchat/GMGPjERr5AohCNVe7VykMw"
        />
        <Paragraph
          details="Used for organizing and RSVPing to EX Raids. "
          title="EX Raid Chat"
          link="https://t.me/joinchat/GMGPjERrg9zzIvVaglh-9g"
          text="https://t.me/joinchat/GMGPjERrg9zzIvVaglh-9g"
        />
        <Paragraph
          details="Rare Spawns and Research Used to call out any rare Pokemon spawns or
          research tasks that are found. "
          title="Rare Spawns and Research"
          link="https://t.me/joinchat/GMGPjEM1Xr4ZpCGAym5YTQ"
          text="https://t.me/joinchat/GMGPjEM1Xr4ZpCGAym5YTQ"
        />
        <Paragraph
          details="Friends and Trading Used to share friend codes and set up trades with
          other players. "
          title="Friends and Trading"
          link="https://t.me/joinchat/F89x00ih15pnIR-8Q8i2yg"
          text="https://t.me/joinchat/F89x00ih15pnIR-8Q8i2yg"
        />
        <Paragraph
          details="Donations are always welcomed. 
          Donations will be used to host the website, and fund pizza on community days and PVP tournamnets. 
          Clicking the link will take you to our donations page. "
          title="Donations"
          link="https://t.me/joinchat/F89x00ih15pnIR-8Q8i2yg"
          text="Donate"
        />
        <p>
          If you have any questions, comments or concerns feel free to reach out
          to any Community Leaders below:
        </p>
        <ul className={classes.List}>
          {admins.map(element => {
            return (
              <li key={element.name}>
                <a href={element.link}>{element.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Welcome;

import React from "react";
import "./parentContainer.styles.css";
import AsideComponent from "../asideComponent/AsideComponent";
import HeaderComponent from "../headerComponent/HeaderComponent";
import TimeComponent from "../timeComponent/TimeComponent";
import MainComponent from "../mainComponent/MainComponent";

class Main extends React.Component {
  render() {
    return (
      <div className="parent__container">
        <HeaderComponent text="welcome abdu," />
        <AsideComponent heading="coligo" />
        <TimeComponent />
        <MainComponent />
      </div>
    );
  }
}

export default Main;

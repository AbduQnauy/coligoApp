import * as React from "react";
import avatar from "../../avatar.png";
import "./header.styles.css";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FormComponent from "./formComponent/formComponent";
import Notification from "./notificationComponent/notificationComponent";
const HeaderComponent = ({ text }) => {
  return (
    <header className="headerComponent">
      <div className="headerComponent__text">{text}</div>
      <div className="headerComponent__right-section">
        <FormComponent />
        <div className="icons-group">
          <Notification notifications="1" iconType={faBell} />
          <Notification notifications="3" iconType={faEnvelope} />
          <img alt="user" src={avatar} className="headerComponent__photo" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;

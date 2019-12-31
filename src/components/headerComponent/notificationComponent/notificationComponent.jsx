import * as React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Notification = ({ notifications, iconType }) => {
  return (
    <>
      <span className="notification-group">
        <FontAwesomeIcon icon={iconType} className="headerComponent__icon" />
        <span className="notification-icon">{notifications}</span>
      </span>
    </>
  );
};

export default Notification;

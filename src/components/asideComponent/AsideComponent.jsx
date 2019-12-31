import React from "react";
import "./aside.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarAlt,
  faListAlt,
  faGraduationCap,
  faChartLine,
  faBullhorn
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AsideComponent = ({ heading }) => {
  const navItems = [
    { icon: faHome, text: "dashboard" },
    { icon: faCalendarAlt, text: "schedule" },
    { icon: faListAlt, text: "courses" },
    { icon: faGraduationCap, text: "gradebook" },
    { icon: faChartLine, text: "performance" },
    { icon: faBullhorn, text: "announcement" }
  ];
  return (
    <aside className="asideComponent">
      <h2 className="asideComponent__heading">{heading}</h2>

      <ul className="asideComponent__nav">
        {navItems.map((navItem, index) => (
          <li key={index} className="asideComponent__item">
            <FontAwesomeIcon icon={navItem.icon} className="nav__icon" />
            <Link to="#" className="nav__text">
              {navItem.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideComponent;

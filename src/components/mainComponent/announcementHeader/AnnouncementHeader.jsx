import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const AnnouncementHeader = ({firstHeader, secondHeader, leftLink}) => {
    return (
        <div className="section__header">
          <div>
            <h5 className="section__main-heading">{firstHeader}</h5>
            <h6 className="section__second-heading">
              {secondHeader}
            </h6>
          </div>
          <Link className="section__link">{leftLink}</Link>
        </div>
    )
}
export default AnnouncementHeader;
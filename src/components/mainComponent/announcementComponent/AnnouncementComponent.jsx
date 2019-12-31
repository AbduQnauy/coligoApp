import * as React from "react";
import "./styles.css";
const AnnouncementComponent = ({ teacher, subject, announcement, photo }) => {
  return (
    <div className="announcement">
      <img alt="teacher" src={photo} className="announcement__photo" />
      <div className="teacher-subject">
        <h3 className="announcement__teacher-name">{teacher}</h3>
        <h5 className="announcement__subject">{subject}</h5>
      </div>
      <p className="announcement__body">
        {announcement}
      </p>
    </div>
  );
};
export default AnnouncementComponent;

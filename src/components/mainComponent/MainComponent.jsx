import * as React from "react";
import "./main.styles.css";
import AnnouncementHeader from './announcementHeader/AnnouncementHeader'
import AnnouncementComponent from "./announcementComponent/AnnouncementComponent";
import avatar from "../../avatar.png";

const MainComponent = () => {
  const announcementDetails = [
    {
      teacher: "mr.abdurhman magdy",
      subject: "math 101",
      photo: avatar,
      announcement:
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie tellus eget augue porttitor, id tempus est rhoncus.Integer sit amet velit a felis blandit bibendum a ac turpis.Proin vitae lorem eget &#128578;
        </>
    },
    {
      teacher: "mrs.salam ahmed",
      subject: "physics 02",
      photo: avatar,
      announcement:
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie tellus eget augue porttitor, id tempus est rhoncus..</span>
    },
    {
      teacher: "events manager",
      subject: "events",
      photo: avatar,
      announcement:
        <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce &#128578;
        </>

    }
  ];
  return (
    <main className="mainComponent">
      <section className="left-section">
        <AnnouncementHeader firstHeader='announcement' secondHeader='Lorem ipsum dolor sit amet eget.' leftLink='all'
        />
        {announcementDetails.map(announce => (
          <AnnouncementComponent
            teacher={announce.teacher}
            subject={announce.subject}
            photo={announce.photo}
            announcement={announce.announcement}
          />
        ))}
      </section>
      {/*  */}
      <section className="right-section">
          <AnnouncementHeader firstHeader="what's due" secondHeader='Lorem ipsum dolor sit amn eget.' leftLink='all'
        />
      </section>
    </main>
  );
};

export default MainComponent;

import * as React from "react";
import "./time.styles.css";
import ButtonComponent from "./buttonComponent/ButtonComponent";
const TimeComponent = props => {
  return (
    <section className="timeComponent">
      <h1 className="timeComponent__heading">exam time</h1>
      <p className="timeComponent__text">
        here we are, are you ready to fight ? don't worry, we prepared some tips
        <br />
        to be ready for your exams.
      </p>
      <div className="timeComponent__quote">
        <span className="timeComponent__quote-text">
          "nothing happens until something moves"
        </span>
        <span className="timeComponent__quote-author">
          &nbsp;-&nbsp;albert einstein
        </span>
      </div>
      <ButtonComponent />
    </section>
  );
};

export default TimeComponent;

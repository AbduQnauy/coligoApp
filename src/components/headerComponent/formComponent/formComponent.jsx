import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FormComponent = props => {
  const inputField = React.createRef();
  const onSubmit = e => {
    e.preventDefault();
    inputField.current.value = "";
  };
  return (
    <form onSubmit={e => onSubmit(e)} className="headerComponent__form">
      <FontAwesomeIcon
        icon={faSearch}
        className="headerComponent__search-icon"
      />
      <input
        type="text"
        placeholder="search"
        className="headerComponent__input"
        ref={inputField}
      ></input>
    </form>
  );
};
export default FormComponent;

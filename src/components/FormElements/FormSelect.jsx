import React, { useState, useEffect } from "react";
import "./FormSelect.style.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const FormSelect = ({ placeholder, name }) => {
  const [opened, setOpened] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (opened === "") {
      setOpened("down");
    }
  }, [opened]);

  useEffect(() => {
    if (title === "") {
      setTitle(placeholder);
    }
  }, [title, placeholder]);

  const handleClick = () => {
    if (opened === "down") setOpened("up");
    else setOpened("down");
  };

  const changeValue = (event, value) => {
    setOpened("down");
    setTitle(value);
  };

  return (
    <div className="form-select">
      <div className="select-title" onClick={handleClick}>
        {title}
        <i className={`fas fa-chevron-${opened}`}></i>
      </div>
      <div
        className="select-body"
        style={opened === "down" ? { display: "none" } : { display: "block" }}
      >
        {options.map((option, index) => (
          <div
            className="select-option"
            key={`${name}option-${index}`}
            value={option.value}
            onClick={event => changeValue(event, option.label)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSelect;

import React, { useState, useEffect } from "react";
import "./FormSelect.style.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const FormSelect = ({ placeholder, defaultValue, name, setValue }) => {
  const [opened, setOpened] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (opened === "") {
      setOpened("down");
    }
  }, [opened]);

  useEffect(() => {
    if (title === "" && defaultValue === "") {
      setTitle(placeholder);
    } else if (title === "" && defaultValue !== "") {
      setTitle(defaultValue);
    } else if (title !== "" && defaultValue === "") {
      setTitle(placeholder);
    }
  }, [title, placeholder, defaultValue]);

  const handleClick = event => {
    if (opened === "down") {
      //selectRef.current.focus();
      setOpened("up");
    } else setOpened("down");
  };

  const changeValue = (event, value) => {
    setOpened("down");
    setTitle(value);
    setValue(value);
  };

  return (
    <div
      className="form-select"
      onBlur={() => {
        console.log("blur event");
      }}
    >
      <div className="select-title" onClick={handleClick}>
        {title}
        <i className="icon-dropdown"></i>
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

import React from "react";
import "./PrimaryButton.scss";

const PrimaryButton = ({ name, action, disabled }) => {

  return (
    <button
      className="primarybutton"
      onClick={action(name)}
      disabled={disabled ? true : false}
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
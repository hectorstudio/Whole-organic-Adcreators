import React from "react";
import "./CreatePassBtn.scss";

const CreatePassBtn = ({ text, action, disabled }) => {

  return (
    <button
      className="createpassbtn"
      onClick={action(text)}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

export default CreatePassBtn;
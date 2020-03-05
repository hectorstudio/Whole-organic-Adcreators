import React, { useState } from "react";
import "./FormCheck.style.scss";

const FormCheck = ({ title }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    const status = event.target.getAttribute("value");
    if(status === "true")
      setChecked(false);
    else
      setChecked(true);
  };
  return (
    <div className="checkbox-wrapper" onClick={handleChange}>
      {title}
      <input
        type="checkbox"
        checked={checked ? "checked" : ""}
        onChange={handleChange}
      />
      <span className="checkmark" value={checked}></span>
    </div>
  );
};

export default FormCheck;

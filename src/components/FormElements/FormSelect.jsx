import React from "react";
import "./FormSelect.style.scss";

const FormSelect = ({name}) => {
  return <div class="form-select">
      <select name={name}>
          <option>abc</option>
          <option>abc</option>
          <option>abc</option>
      </select>
  </div>;
};

export default FormSelect;

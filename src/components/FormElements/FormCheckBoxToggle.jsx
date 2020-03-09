import React from "react"
import './FormCheckBoxToggle.scss'
const FormCheckBoxToggle = ({ text, id }) => {

  return (
    <div className="toggle-container notify-checkbox-block__item">
      <input type="checkbox" id={id} className="toggle-container__input" />
      <label className="toggle-container-circle" htmlFor={id}></label>
      <label className="toggle-container__text">{text}</label>
    </div>
  )
  
}

export default FormCheckBoxToggle
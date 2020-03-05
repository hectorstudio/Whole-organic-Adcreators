import React from 'react';
import './FormInput.scss'
const FormInput = ({ label, type, value, placeholder, action }) => {
  
  const handleChange = () => {
    action("Changed")
  }
  
  return (
    <div>
      <p className="textLabel">{label}</p>
      <input type="text" placeholder={placeholder} onChange={handleChange}></input>
    </div>
  )
}

export default FormInput
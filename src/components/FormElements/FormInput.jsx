import React from 'react';
import './FormInput.scss'
const FormInput = ({ label, type, value, placeholder }) => {
  const handleChange = e => {
    value = e.target.value
    
  }
  
  return (
    <div>
      {label !== "" ? <p className="textLabel">{label}</p> : ''}
      <input className="formInput" type={type} value={value} placeholder={placeholder} onChange={handleChange}></input>
    </div>
  )
}

export default FormInput
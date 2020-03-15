import React from "react"
import './NotifyInfo.scss'
import FormCheckBoxToggle from "../../../components/FormElements/FormCheckBoxToggle"

const NotifyInfo = () => {
  
  return (
    <div className="notify">
      <p className="notify__title">Notify me about</p>
      <div className="notify-checkbox-block">
        <FormCheckBoxToggle text="New Products" id="1" />
        <FormCheckBoxToggle text="New Suppliers" id="2" />
        <FormCheckBoxToggle text="New deals" id="3" />
        <FormCheckBoxToggle text="New message" id="4" />
      </div>
    </div>
  )
}

export default NotifyInfo
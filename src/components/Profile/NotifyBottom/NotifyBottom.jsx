import React from 'react'
import './NotifyBottom.scss'
import FormCheckBoxToggle from "../../components/FormElements/FormCheckBoxToggle"
const NotifyBottom = () => {
  return (
    <div className="notify-bottom">
      <p className="notify-bottom__title">Notify me about</p>
      <div className="notify-bottom-checkbox-block">
        <FormCheckBoxToggle text="New requests" id="5" />
        <FormCheckBoxToggle text="New messages" id="6" />
      </div>
    </div>
  )
}

export default NotifyBottom
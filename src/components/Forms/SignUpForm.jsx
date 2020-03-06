import React from "react"
import "./SignUpForm.scss"
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import FormInput from '../../components/FormElements/FormInput'
import FormCheck from '../../components/FormElements/FormCheck'
const SignUpForm = ({ title }) => {
  const handleClick = () => {
    console.log("btn Clicked")
  }

  return (
    <form className="sign-up-form">
      <h2>{title}</h2>
      <div className="input-block-sign-up">
        <div className="input-section">
          <div className="wrapper">
            <FormInput label="" value="" type="text" placeholder="First Name" className="formInput input-block-sign-up__item" />
          </div>
          <div className="wrapper">
            <FormInput label="" value="" type="text" placeholder="Last Name" className="formInput input-block-sign-up__item" />
          </div>
        </div>
        <div className="input-section">
          <div className="wrapper">
            <FormInput label="" value="" type="email" placeholder="Email address" className="formInput input-block-sign-up__item" />
          </div>
          <div className="wrapper">
            <FormInput label="" value="" type="password" placeholder="Create password" className="formInput input-block-sign-up__item" />
          </div>
        </div>
        <div className="checkbox-block">
            <FormCheck title="By Registering, you agree that you’ve read and accepted our User Agreement, you’re at least 18 years old, and you consent to our Privacy Notice and receiving marketing communications from us." />
        </div>
        <div className="captcha-block">

        </div>
        <div className="bottom-block-sign-up">
          <PrimaryButton text="Register" action={handleClick} disabled={true} />
          <p className="bottom-block-sign-up__text">
            Already a member? Please <a className="bottom-block-sign-up__link" href="/login">login</a>
          </p>
          
        </div>

      </div>
    </form>
  )
}

export default SignUpForm
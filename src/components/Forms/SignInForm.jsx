import React from "react";
import './SignInForm.scss'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import FormInput from '../../components/FormElements/FormInput';

const SignInForm = ({ title }) => {

  const action = name => {
    console.log(name + " Clicked")
  }
  const handleChange = () => {
    console.log("213")
  }
  return (
    <form className="sign-in-form">
      <h2>{title}</h2>
      
      <div className="input-block-sign-in">
        <div class="input-block-sign-in-wrapper wrapper">
          <FormInput label="" value="" type="email" placeholder="Email address" />
        </div>
        <div class="input-block-sign-in-wrapper wrapper">
          <FormInput label="" value="" type="password" placeholder="Password" />
        </div>
        <a class="input-block-sign-in__link" href="/forgot-pass">
          Forgot your password?
        </a>
        <div class="bottom-block-sign-in">
          <PrimaryButton text="Login" action={action} disabled={true} />
        </div>
      </div>
      <p class="bottom-block-sign-in__text">
        Don’t have an account? Please <a class="bottom-block-sign-up__link" href="/register">
          register
        </a>
      </p>
    </form>
  );
};

export default SignInForm;
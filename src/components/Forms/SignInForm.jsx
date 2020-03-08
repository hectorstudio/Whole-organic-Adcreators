import React from "react";
import "./SignInForm.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormInput from "../../components/FormElements/FormInput";

const SignInForm = ({ title }) => {
  const action = name => {};

  return (
    <form className="sign-in-form">
      <h2>{title}</h2>

      <div className="input-block-sign-in">
        <div className="input-block-sign-in-wrapper wrapper">
          <FormInput
            label=""
            value=""
            type="email"
            placeholder="Email address"
            className="formInput"
          />
        </div>
        <div className="input-block-sign-in-wrapper wrapper">
          <FormInput
            label=""
            value=""
            type="password"
            placeholder="Password"
            className="formInput"
          />
        </div>
        <a className="input-block-sign-in__link" href="/forgot-pass">
          Forgot your password?
        </a>
        <div className="bottom-block-sign-in">
          <PrimaryButton text="Login" action={action} disabled={true} />
        </div>
      </div>
      <p className="bottom-block-sign-in__text">
        Don’t have an account? Please{" "}
        <a className="bottom-block-sign-up__link" href="/register">
          register
        </a>
      </p>
    </form>
  );
};

export default SignInForm;

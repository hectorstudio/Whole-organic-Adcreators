import React, { useState } from "react";
import "./SignInForm.scss";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FormInput from "../../components/FormElements/FormInput";
import Rules from "../../constants/validations/LoginValidator";
import EmailRules from "../../constants/validations/EmailValidator";
import PasswordRules from "../../constants/validations/PasswordValidator";
import RegExValidator from "../../constants/validations/RegExValidator";

const SignInForm = ({ title }) => {
  const action = name => {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertPassword, setAlertPassword] = useState("");
  const [primaryDisable, setPrimaryDisable] = useState(true);

  const validator = () => {
    const validRes = RegExValidator({ email: email, password: password }, Rules);
    setPrimaryDisable(!validRes.isValid);
  }

  const changeEmail = value => {
    setEmail(value);
    validator();
    const validRes = RegExValidator({email: email}, EmailRules);
    if(!validRes.isValid){
      setAlertEmail(validRes.errors.email);
    }
    else{
      setAlertEmail("");
    }
  };

  const changePassword = value => {
    setPassword(value);
    validator();
    const validRes = RegExValidator({password: password}, PasswordRules);
    if(!validRes.isValid){
      setAlertPassword(validRes.errors.password);
    }
    else{
      setAlertPassword("")
;    }
  };

  const clickSubmit = () => {
    console.log("Click Submit");
  };

  return (
    <form className="sign-in-form">
      <h2>{title}</h2>

      <div className="input-block-sign-in">
        <div className="input-block-sign-in-wrapper wrapper">
          <FormInput
            label=""
            value={email}
            type="email"
            placeholder="Email address"
            className="formInput"
            alert={alertEmail}
            changeAction={changeEmail}
          />
        </div>
        <div className="input-block-sign-in-wrapper wrapper">
          <FormInput
            label=""
            value={password}
            type="password"
            placeholder="Password"
            className="formInput"
            alert={alertPassword}
            changeAction={changePassword}
          />
        </div>
        <a className="input-block-sign-in__link" href="/forgot-pass">
          Forgot your password?
        </a>
        <div className="bottom-block-sign-in">
          <PrimaryButton
            text="Login"
            action={action}
            disabled={primaryDisable}
            clickAction={clickSubmit}
          />
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

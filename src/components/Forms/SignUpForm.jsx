import React, { useState } from "react";
import Recaptcha from "react-recaptcha";
import "./SignUpForm.style.scss";
import UserButton from "../../components/Buttons/UserButton";
import FormInput from "../../components/FormElements/FormInput";
import FormCheck from "../../components/FormElements/FormCheck";
import Rules from "../../constants/validations/SignUpValidator";
import NameRules from "../../constants/validations/NameValidator";
import EmailRules from "../../constants/validations/EmailValidator";
import PasswordRules from "../../constants/validations/PasswordValidator";
import RegExValidator from "../../constants/validations/RegExValidator";

const SignUpForm = ({ title }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertPassword, setAlertPassword] = useState("");
  const [alertFirstName, setAlertFirstName] = useState("");
  const [alertLastName, setAlertLastName] = useState("");
  const [primaryDisable, setPrimaryDisable] = useState(true);
  const [termChecked, setTermCheck] = useState(false);

  const validator = () => {
    const validRes = RegExValidator(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      },
      Rules
    );
    console.log(termChecked);
    setPrimaryDisable(validRes.isValid);
  };

  const changeFirstName = value => {
    setFirstName(value);
    validator();
    const validRes = RegExValidator({ firstName: value }, NameRules);
    if (!validRes.isValid) {
      setAlertFirstName(validRes.errors.firstName);
    } else {
      setAlertFirstName("");
    }
  };

  const changeLastName = value => {
    setLastName(value);
    validator();
    const validRes = RegExValidator({ lastName: value }, NameRules);
    if (!validRes.isValid) {
      setAlertLastName(validRes.errors.lastName);
    } else {
      setAlertLastName("");
    }
  };

  const changeEmail = value => {
    setEmail(value);
    validator();
    const validRes = RegExValidator({ email: value }, EmailRules);
    if (!validRes.isValid) {
      setAlertEmail(validRes.errors.email);
    } else {
      setAlertEmail("");
    }
  };

  const changePassword = value => {
    setPassword(value);
    validator();
    const validRes = RegExValidator({ password: value }, PasswordRules);
    if (!validRes.isValid) {
      setAlertPassword(validRes.errors.password);
    } else {
      setAlertPassword("");
    }
  };

  const handleClick = () => {
    console.log("btn Clicked");
  };

  const checkTerm = value => {
    console.log(value);
    setTermCheck(value);
    validator();
  };

  const recaptchaCallback = () => {
    console.log("Recaptcha Callback");
  };
  return (
    <form className="sign-up-form">
      <h2>{title}</h2>
      <div className="input-block-sign-up">
        <div className="input-section">
          <div className="wrapper">
            <FormInput
              label=""
              value={firstName}
              type="text"
              placeholder="First Name"
              alert={alertFirstName}
              className="formInput input-block-sign-up__item"
              changeAction={changeFirstName}
            />
          </div>
          <div className="wrapper">
            <FormInput
              label=""
              value={lastName}
              type="text"
              placeholder="Last Name"
              alert={alertLastName}
              className="formInput input-block-sign-up__item"
              changeAction={changeLastName}
            />
          </div>
        </div>
        <div className="input-section">
          <div className="wrapper">
            <FormInput
              label=""
              value={email}
              type="email"
              placeholder="Email address"
              alert={alertEmail}
              className="formInput input-block-sign-up__item"
              changeAction={changeEmail}
            />
          </div>
          <div className="wrapper">
            <FormInput
              label=""
              value={password}
              type="password"
              alert={alertPassword}
              placeholder="Create password"
              className="formInput input-block-sign-up__item"
              changeAction={changePassword}
            />
          </div>
        </div>
        <div className="checkbox-block">
          <FormCheck
            title="By Registering, you agree that you’ve read and accepted our User Agreement, you’re at least 18 years old, and you consent to our Privacy Notice and receiving marketing communications from us."
            checked={termChecked}
            checkTerm={checkTerm}
          />
        </div>
        <div className="captcha-block">
          <p className="captcha__title">
            Before you proceed please complete the captcha below
          </p>
          <div className="captcha-wrapper">
            <Recaptcha
              sitekey="xxxxxxxxxx"
              render="explicit"
              onloadCallback={recaptchaCallback}
            />
          </div>
        </div>
        <div className="bottom-block-sign-up">
          <UserButton
            text="Register"
            action={handleClick}
            disabled={!(primaryDisable && termChecked)}
            varient="primary"
          />
          <p className="bottom-block-sign-up__text">
            Already a member? Please{" "}
            <a className="bottom-block-sign-up__link" href="/login">
              login
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;

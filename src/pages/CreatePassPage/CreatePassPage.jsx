import React from 'react';
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import ForgotButton from '../../components/Buttons/ForgotButton'
import FormInput from '../../components/FormElements/FormInput';
import './CreatePassPage.scss'
import { useParams } from 'react-router-dom';

const CreatePassPage = () => {
  
  const action = () => {

  }
  return (
    <div>
      <div className="breadcrumbs">
        <span className="breadcrumbs__text">
          <a className="breadcrumbs__link" href="/">
            <span>Home</span>
          </a>
        </span>
        <i className="icon-arrow-bread"></i>
        <span className="breadcrumbs__text">
          <span>Forgot password</span>
        </span>
      </div>
      <div className="forgot-pass-block">
        <h2 className="custom-title">Forgot your password?</h2>
        <p className="custom-text">Enter your email address and we will send you an email to reset your password</p>
        <form className="forgot-pass-block-form">
          <div className="wrapper">
            <FormInput label="" value="" type="email" placeholder="Email address" className="formInput" />
          </div>
          <ForgotButton text="Login" action={action} disabled={true} />
        </form>
      </div>
    </div>
  )
};



export default CreatePassPage;

import React from "react";
import SignInForm from "../../../components/Forms/SignInForm";
import SocialMediaButton from "../../../components/Buttons/SocialMediaButton";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import "./LoginPage.style.scss";
const breadCrumbs = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: ""
  },
  {
    id: '2',
    title: 'Log in',
    path: '/login',
    active: "active"
  }
]
const LoginPage = () => {
  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
      <div className="login-in-account">
        <div className="login-in-account-wrapper">
          <div className="login-page">
            <SignInForm title="Welcome back" />
          </div>
        </div>
        <div className="login-in-account-social-network-wrapper">
          <h2 className="custom-title">Or login using</h2>
          <div className="facebook-block">
            <SocialMediaButton text="Facebook" />
          </div>
          <div className="google-block">
            <SocialMediaButton text="Google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

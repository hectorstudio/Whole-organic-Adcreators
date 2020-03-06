import React from 'react';
import SignInForm from '../../components/Forms/SignInForm'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './LoginPage.scss'
const LoginPage = () => {
   

  return (
    <div className="login-in-account">
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>Login</BreadcrumbItem>
      </Breadcrumb>
      <div className="login-page">
        <SignInForm title="Welcome back" />
      </div>
    </div>
    
  )
};

export default LoginPage;

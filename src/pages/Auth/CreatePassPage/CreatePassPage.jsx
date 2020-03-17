import React from "react";
import FormInput from "../../../components/FormElements/FormInput";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import UserButton from "../../../components/Buttons/UserButton";
import "./CreatePassPage.style.scss";

const breadCrumbs = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: ""
  },
  {
    id: '2',
    title: 'Create a new password',
    path: '/create-pass',
    active: "active"
  }
]

const CreatePassPage = () => {
  const action = () => {};
  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
      <div className="create-pass-block">
        <h2 className="custom-title">Create a new password</h2>
        <p className="custom-text">
          Enter your email address and we will send you an email to reset your
          password
        </p>
        <form className="create-pass-block-form">
          <div className="create-pass-input-section">
            <div className="create-pass-block-wrapper wrapper">
              <FormInput
                label=""
                value=""
                type="password"
                placeholder="Create new password"
                className="formInput"
              />
            </div>
            <div className="create-pass-block-wrapper wrapper">
              <FormInput
                label=""
                value=""
                type="email"
                placeholder="Confrim new password"
                className="formInput"
              />
            </div>
          </div>
          <UserButton text="Save password" action={action} disabled={true} varient="createpass" />
        </form>
      </div>
    </div>
  );
};

export default CreatePassPage;

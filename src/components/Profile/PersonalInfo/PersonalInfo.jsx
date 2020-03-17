import React, { useState } from 'react';
import UserButton from "../../../components/Buttons/UserButton";
import Avatar from "react-avatar"
import Files from "react-files"
import FormInput from "../../../components/FormElements/FormInput"
import "./PersonalInfo.style.scss"
const defaultUserImg = require('../../../images/default-user.jpg');
const PersonalInfo = () => {
  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState(null)
  const handleFileChange = files => {
    setAvatar(files[0])
  }
  const handleFileError = err => setError(err)

  const action = () => {
    
  }
  
  return (
    <div className="personal-info">
      <h2 className="personal-info__title custom-title">My personal account</h2>
      <div className="personal-info-avatar">
        <p className="avatar-title">General info</p>
        <div className="avatar-block">
          <div className={'avatar-container'}>
            <Files
              className="files-dropzone"
              onChange={handleFileChange}
              onError={handleFileError}
              accepts={['image/*']}
              multiple={false}
            >
              <Avatar src={avatar ? avatar.preview.url : defaultUserImg} size="129" round={true} />
            </Files>
          </div>
        </div>
        <div className="error">{error}</div>
      </div>
      <form className="personal-info-form">
        <div className="personal-block-input-section">
          <div className="personal-block-input-wrapper wrapper">
            <FormInput
              label="First Name"
              value=""
              type="text"
              placeholder=""
              className="formInput personal-block-input__item"
            />
          </div>
          <div className="personal-block-input-wrapper wrapper">
            <FormInput
              label="Last Name"
              value=""
              type="text"
              placeholder=""
              className="formInput personal-block-input__item"
            />
          </div>
          <div className="personal-block-input-wrapper wrapper">
            <FormInput
              label="Email address"
              value=""
              type="email"
              placeholder=""
              className="formInput personal-block-input__item"
            />
          </div>
        </div>
        <a className="personal-info__link" href="/create-pass">Change password</a>
        <UserButton text="Save changes" action={action} disabled={false} varient="normal" />
      </form>
    </div>
  )
}

export default PersonalInfo
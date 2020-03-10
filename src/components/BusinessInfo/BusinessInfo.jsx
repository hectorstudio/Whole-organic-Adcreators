import React, { useState } from "react";
import "./BusinessInfo.scss";
import Avatar from "react-avatar";
import Files from "react-files";
import FormLocation from "../../components/FormElements/FormLocation";
import FormSelect from "../FormElements/FormSelect";
const BusinessInfo = () => {
  const handleFileChange = files => {
    console.log(files);
    setAvatar(files[0]);
  };
  const handleFileError = err => setError(err);

  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = () => {};
  const defaultUserImg = require('../../images/default-user.jpg');
  return (
    <div className="business-info">
      <h2 className="business-info__title custom-title">My business account</h2>
      <div className="business-info-avatar">
        <p className="avatar-title">General info</p>
        <div className="avatar-block">
          <div className={"avatar-container"}>
            <Files
              className="files-dropzone"
              onChange={handleFileChange}
              onError={handleFileError}
              accepts={["image/*"]}
              multiple={false}
            >
              <Avatar
                src={avatar ? avatar.preview.url : defaultUserImg}
                size="129"
                round={true}
              />
            </Files>
          </div>
        </div>
      </div>
      <form className="business-block-input-section">
        <div className="business-block-input-section-row">
          <div className="select__item">
            <p className="select__item-title">Select business type</p>
            <FormSelect placeholder="Select a category" name="category" />
          </div>
          <div className="business-block-input-wrapper wrapper">
            <label className="label-for-input">Add business name</label>
            <input
              required=""
              type="text"
              className="business-block-input__item custom-input"
              value=""
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-area__item">
          <textarea placeholder="Type here" className="textarea"></textarea>
          <label className="label-for-textarea">
            Add description about your business
          </label>
        </div>
        <div className="input-location__item">
          <p className="input-location__item-title">Enter your location</p>
          <div className="business-block-input-location__item select-wrapper">
            <FormLocation title="" />
          </div>
          <button className="business-block-input-section__btn">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessInfo;

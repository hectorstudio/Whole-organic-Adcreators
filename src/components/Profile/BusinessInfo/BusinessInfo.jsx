import React, { useState } from "react";
import "./BusinessInfo.style.scss";
import "../../Search/SearchItems"
import Avatar from "react-avatar";
import Files from "react-files";
import FormLocation from "../../../components/FormElements/FormLocation";
import Select from 'react-select'
const BusinessInfo = () => {
  const handleFileChange = files => {
    console.log(files);
    setAvatar(files[0]);
  };
  const handleFileError = err => setError(err);
  const selOptions = [
    { text: "Sole Trader", value: "Sole Trader" },
    { text: "Private Company", value: "Private Company" },
    { text: "Partnership", value: "Partnership" }
  ]
  const sortedData = arr => {
    return arr.map(item => {
      return {
        label: item.text,
        value: item.text
      };
    });
  };
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = () => {};
  const defaultUserImg = require('../../../images/default-user.jpg');
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
        <div className="error">{error}</div>
      </div>
      <form className="business-block-input-section">
        <div className="business-block-input-section-row">
          <div className="select__item">
            <p className="select__item-title">Select business type</p>
            <Select placeholder="Sole Trader" options={sortedData(selOptions)}/>
            <i className="icon-dropdown" />
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
        </div>
        <button className="business-block-input-section__btn">
            Save changes
          </button>
      </form>
    </div>
  );
};

export default BusinessInfo;

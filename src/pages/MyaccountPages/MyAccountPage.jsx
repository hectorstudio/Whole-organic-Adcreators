import React, {useState} from "react";
import "./MyAccountPage.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import UserButton from "../../components/Buttons/UserButton";
//import ReactFileReader from "react-file-reader";
import Avatar from "react-avatar"
import Files from "react-files"
import FormInput from "../../components/FormElements/FormInput"
import FormSelect from "../../components/FormElements/FormSelect"
import FormCheckBoxToggle from "../../components/FormElements/FormCheckBoxToggle"
import FormLocation from "../../components/FormElements/FormLocation";
const breadCrumbs = [
  {
    id: '1',
    title: 'Home',
    path: '/',
    active: ""
  },
  {
    id: '2',
    title: 'My account',
    path: '/my-account',
    active: "active"
  }
]

const MyAccountPage = () => {

  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState(null)

	const handleFileChange = files => {
    console.log(files)
    setAvatar(files[0])
  }
	const handleFileError = err => setError(err)
  const action = () => {
    
  }
  const handleClick = () => {

  }
  const handleChange = () => {

  }
  return (
    <div>
      <Breadcrumbs breadcrumbsItems={breadCrumbs} />
      <div className="my-account">
        <div className="account-menu">
          MenuList
        </div>
        <div className="account-content">
          <div className="my-profile">
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
                      <Avatar src={avatar ? avatar.preview.url : ''} size="160" round={true} />
                    </Files>
                  </div>
                </div>
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
            <div className="select-products">
              <p className="select-products__title">Select products you’re interested in</p>
              <div className="select-products-block">
                <div className="search-container__items select-category-products">
                  <FormSelect placeholder="Select a category" name="category" />
                </div>
                <div className="search-container__items select-subcategory-products">
                  <FormSelect placeholder="Select a subcategory" name="subcategory" />
                </div>
                <div className="search-container__items input-products">
                  <div className="input select-products-block__input">
                    <FormInput className="formInput product-input" placeholder="Or type product name here..." type="text" changeAction={handleChange} />
                  </div>
                  <UserButton varient="add-search-products" text="Add" action={handleClick}  />
                </div>
              </div>
              <UserButton varient="select-products" text="Save changes" action={action} />
            </div>
            <div className="notify">
              <p className="notify__title">Notify me about</p>
              <div className="notify-checkbox-block">
                <FormCheckBoxToggle text="New Products" id="1" />
                <FormCheckBoxToggle text="New Suppliers" id="2" />
                <FormCheckBoxToggle text="New deals" id="3" />
                <FormCheckBoxToggle text="New message" id="4" />
              </div>
            </div>
            <div className="business-info">
            <h2 className="business-info__title custom-title">My business account</h2>
              <div className="business-info-avatar">
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
                        <Avatar src={avatar ? avatar.preview.url : ''} size="160" round={true} />
                      </Files>
                    </div>
                  </div>
                </div>
              <form className="business-block-input-section">
                <div className="business-block-input-section-row">
                  <div className="select__item">
                    <p className="select__item-title">Select business type</p>
                  </div>
                  <div class="business-block-input-wrapper wrapper">
                    <input required="" type="text" class="business-block-input__item custom-input" value="" />
                    <label class="label-for-input">Add business name</label>
                  </div>
                </div>
                <div className="text-area__item">
                  <textarea placeholder="Type here" class="textarea"></textarea>
                  <label className="label-for-textarea">Add description about your business</label>
                </div>
                <div className="input-location__item">
                  <p className="input-location__item-title">Enter your location</p>
                  <div className="business-block-input-location__item select-wrapper">
                    <FormLocation title="" />
                  </div>
                </div>
              </form>
            </div>
            <div className="my-addresses">
              my-addresses
            </div>
            <div className="notify-bottom">
              notify-bottom
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
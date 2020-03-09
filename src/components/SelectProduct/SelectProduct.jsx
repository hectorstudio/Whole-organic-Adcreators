import React from 'react'
import './SelectProduct.scss'
import FormInput from "../../components/FormElements/FormInput"
import FormSelect from "../../components/FormElements/FormSelect"
import UserButton from "../../components/Buttons/UserButton";

const SelectProduct = () => {
  const action = () => {
    
  }
  const handleClick = () => {

  }
  const handleChange = () => {

  }

  return (
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
  )
}

export default SelectProduct;
import React, { useState, useEffect } from "react";
import "./SelectProduct.scss";
import FormSelect from "../../components/FormElements/FormSelect";
import UserButton from "../../components/Buttons/UserButton";

const SelectProduct = ({ products = [] }) => {
  const [selected, setSelected] = useState([]);
  const [currentCat, setCurrentCat] = useState("");
  const [currentSub, setCurrentSub] = useState("");
  const [productName, setProductName] = useState("");

  const handleClick = () => {
    let data = [...selected];
    const tempArr = {
      category: currentCat,
      subcategory: currentSub,
      name: productName
    };
    data.push(tempArr);
    setCurrentSub("");
    setCurrentCat("");
    setProductName("");
    setSelected(data);
  };
  const handleChange = event => {
    setProductName(event.target.value);
  };

  const removeItem = (event, index) => {
    let data = [...selected];
    data.splice(index);
    setSelected(data);
  }

  useEffect(() => {
    if (selected.length < 1 && !products.length < 1) {
      setSelected(products);
    }
  }, [selected, products]);

  return (
    <div className="select-products">
      <p className="select-products__title">
        Select products you’re interested in
      </p>
      <div className="select-products-block">
        <div className="search-container__items select-category-products">
          <FormSelect
            placeholder="Select a category"
            defaultValue={currentCat}
            name="category"
            setValue={setCurrentCat}
          />
        </div>
        <div className="search-container__items select-subcategory-products">
          <FormSelect
            placeholder="Select a subcategory"
            defaultValue={currentSub}
            name="subcategory"
            setValue={setCurrentSub}
          />
        </div>
        <div className="search-container__items input-products">
          <div className="ui input select-products-block__input">
            <input
              placeholder="Or type product name here…"
              type="text"
              value={productName}
              onChange={handleChange}
            />
          </div>
          <UserButton
            varient="add-search-products"
            text="Add"
            action={handleClick}
          />
        </div>
      </div>
      <div className="filter-products-list">
        {selected.map((item, index) => (
          <div className="product-item" key={`product_item${index}`}>
            <div className="product-name">{item.name}</div>
            <span onClick={event => removeItem(event,index)}>
              <i className="fas fa-times"></i>
            </span>
          </div>
        ))}
      </div>
      <button className="select-products_btn disabled" type="button">
        Save changes
      </button>
    </div>
  );
};

export default SelectProduct;

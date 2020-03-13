import React, { useState, useEffect } from "react";
import ProductSearchItems from "./ProductSearchItems";
import axios from "axios";
import PropTypes from "prop-types";
import "./SelectProduct.scss";

const listItems = [
  {
    id: "1",
    placeholderTitle: "Select a category"
  },
  {
    id: "2",
    placeholderTitle: "Select sub-category"
  },
  {
    id: "3",
    btnTitle: "Add",
    placeholderTitle: "Or type product name here…"
  }
];

const SelectProduct = ({ filterData = [] }) => {
  const [selected, setSelected] = useState([]);
  const [searchData, setSearchData] = useState({
    selectedCategory: null,
    selectedSubcategory: null,
    subcategories: null,
    searchText: ""
  });
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    axios
      .get(`/json/getCategories.json`)
      .then(res => setCategoriesData(res.data.categories));
  }, [setCategoriesData]);
  const handleClick = () => {
    let data = [...selected];
    data.push(searchData);
    setSelected(data);
    console.log(data);
  };

  const removeItem = (event, index) => {
    let data = [...selected];
    data.splice(index);
    setSelected(data);
  };

  useEffect(() => {
    if (selected.length < 1 && !filterData.length < 1) {
      setSelected(filterData);
    }
  }, [selected, filterData]);

  return (
    <div className="select-products">
      <p className="select-products__title">
        Select products you’re interested in
      </p>
      <div className="select-products-block">
        {listItems.map(item => {
          return (
            <ProductSearchItems
              key={item.id}
              title={item.title}
              select={item.select}
              btnTitle={item.btnTitle}
              placeholderTitle={item.placeholderTitle}
              categoriesData={categoriesData}
              icon={item.icon}
              searchData={searchData}
              setSearchData={setSearchData}
              handleClick={handleClick}
            />
          );
        })}
      </div>
      <div className="filter-products-list">
        {selected.map((item, index) => (
          <div className="product-item" key={`product_item${index}`}>
            <div className="product-name">{item.searchText}</div>
            <span onClick={event => removeItem(event,index)}>
              <i className="fas fa-times"></i>
            </span>
          </div>
        ))}
      </div>
      <button className="select-products_btn" type="button">
        Save changes
      </button>
    </div>
  );
};

SelectProduct.propTypes = {
  filterData: PropTypes.array,
};
export default SelectProduct;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./SelectProduct.scss";
import ProductSearchItems from "./ProductSearchItems";
import { setFilterData } from '../../store/filter/filterActions';
import PropTypes from 'prop-types';

const listItems = [
  {
    id: '1',
    placeholderTitle: 'Select a category'
  },
  {
    id: '2',
    placeholderTitle: 'Select sub-category'
  },
  {
    id: '3',
    btnTitle: 'Add',
    placeholderTitle: 'Or type product name here…',
  }
];

const SelectProduct = () => {
  const [searchData, setSearchData] = useState({
    selectedCategory: null,
    selectedSubcategory: null,
    subcategories: null,
    searchText: ''
  });
  const [categoriesData, setCategoriesData] = useState([]);
  console.log(
    searchData.selectedCategory,
    searchData.selectedSubcategory,
    searchData.subcategories,
    searchData.searchText
  );
  console.log(searchData);

  useEffect(() => {
    axios.get(`/json/getCategories.json`).then(res => {
      setCategoriesData(res.data.categories);
    });
  }, [setCategoriesData]);

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
              icon={item.icon}
              searchData={searchData}
              setSearchData={setSearchData}
              categoriesData={categoriesData}
              setFilterData={setFilterData}
            />
          );
        })}
      </div>
      {
        
      }
      <button className="select-products_btn" type="button">
        Save changes
      </button>
    </div>
  );
};

SelectProduct.propTypes = {
  setFilterData: PropTypes.func
};
export default SelectProduct;

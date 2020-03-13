import React, { useState, useEffect } from "react";
import ProductSearchItems from "./ProductSearchItems";
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

const SelectProduct = ({ products = [] }) => {
  const [selected, setSelected] = useState([]);
  const [currentCat, setCurrentCat] = useState("");
  const [currentSub, setCurrentSub] = useState("");
  const [productName, setProductName] = useState("");
  const [searchData, setSearchData] = useState("");
  const [categoriesData, setCategoriesData] = useState("");
  const [filterData, setFilterData] = useState("");

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

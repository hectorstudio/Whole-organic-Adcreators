import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchItems from '../../components/Search/SearchItems';
import './SearchSection.scss';
import PropTypes from 'prop-types';

const listItems = [
  {
    id: '1',
    title: 'Search a product'
  },
  {
    id: '2',
    placeholderTitle: 'Select a category'
  },
  {
    id: '3',
    placeholderTitle: 'Select sub-category'
  },
  {
    id: '4',
    btnTitle: 'Search',
    placeholderTitle: 'Or type product name here…',
    icon: 'icon-search'
  }
];

const SearchSection = ({ setFilterData }) => {
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

  useEffect(() => {
    axios.get(`/json/getCategories.json`).then(res => {
      setCategoriesData(res.data.categories);
    });
  }, [setCategoriesData]);

  return (
    <form className="search-container">
      {listItems.map(item => {
        return (
          <SearchItems
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
    </form>
  );
};

SearchSection.propTypes = {
  setFilterData: PropTypes.func
};

export default SearchSection;

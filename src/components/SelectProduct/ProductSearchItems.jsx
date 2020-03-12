import React from 'react';
import { Input } from 'semantic-ui-react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import 'semantic-ui-css/components/input.css';
import '../Search/SearchItems.scss';

const ProductSearchItems = ({
  btnTitle,
  placeholderTitle,
  icon,
  categoriesData,
  searchData,
  setSearchData,
  setFilterData
}) => {
  let content;

  const categoryVal = searchData.selectedCategory;
  const subcategoryVal = searchData.selectedSubcategory;
  const searchVal = searchData.searchText;

  const sortedData = arr => {
    return arr.map(item => {
      return {
        label: item.text,
        value: item.text
      };
    });
  };

  const categoryHandler = categoryVal => {
    const resultCategory = categoriesData.filter(
      item => item.text === categoryVal.value
    );
    const resultSubcategories = resultCategory[0].subCategory;
    if (searchData.selectedSubcategory === null) {
      setSearchData(state => {
        return {
          ...state,
          selectedCategory: categoryVal,
          subcategories: resultSubcategories
        };
      });
    } else {
      setSearchData(state => {
        return {
          ...state,
          selectedCategory: categoryVal,
          subcategories: resultSubcategories,
          selectedSubcategory: null
        };
      });
    }
  };

  const subcategoryHandler = subcategoryVal => {
    setSearchData(state => {
      return {
        ...state,
        selectedSubcategory: subcategoryVal
      };
    });
  };

  const searchHandler = (event, data) => {
    setSearchData(state => {
      return {
        ...state,
        searchText: data.value
      };
    });
  };

  const addHandler = () => {
    
  }
  

  if (placeholderTitle === 'Select a category') {
    content = (
      <div className="search-container__items select-category-products">
        <Select
          placeholder={placeholderTitle}
          options={sortedData(categoriesData)}
          onChange={categoryHandler}
          value={categoryVal}
        />
        <i className="icon-dropdown" />
      </div>
    );
  }

  if (placeholderTitle === 'Select sub-category') {
    content = (
      <div className="search-container__items select-subcategory-products">
        <Select
          placeholder={placeholderTitle}
          options={
            searchData.subcategories !== null
              ? sortedData(searchData.subcategories)
              : null
          }
          onChange={subcategoryHandler}
          isDisabled={searchData.subcategories === null}
          value={subcategoryVal}
        />
        <i className="icon-dropdown" />
      </div>
    );
  }

  if (btnTitle) {
    content = (
      <div className="search-container__items input-products">
        <Input
          placeholder={placeholderTitle}
          className="ui input select-products-block__input"
          value={searchVal}
          onChange={searchHandler}
        />
        <button
          className={`search-container-form__btn btn-products ${!categoryVal && !searchVal ? 'disabled' : ''}`}
          type={'button'}
          onClick={addHandler}
        >
          <i className={icon} />
          <span className="select-products-block__text">{btnTitle}</span>
        </button>
      </div>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

ProductSearchItems.propTypes = {
  title: PropTypes.string,
  select: PropTypes.bool,
  btnTitle: PropTypes.string,
  placeholderTitle: PropTypes.string,
  searchData: PropTypes.object,
  setFilterData: PropTypes.func,
  setSearchData: PropTypes.func,
  categoriesData: PropTypes.arrayOf(Object),
  icon: PropTypes.string
};

export default ProductSearchItems;

import React from "react";
import SearchContainer from "../../sections/Search/SearchContainer";
import TotalProductsContainer from "../../sections/ProductsStack/TotalProductsContainer";
import ProductFilterContainer from "../../sections/ProductsStack/ProductsFilterContainer";
import "./ProductPage.style.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
const breadCrumbs = [
  {
    id: "1",
    title: "Home",
    path: "/",
    active: ""
  },
  {
    id: "2",
    title: "Sun care",
    path: "/products",
    active: ""
  },
  {
    id: "3",
    title: "8666 products",
    path: "/products",
    active: "active"
  }
];
const ProductPage = () => {
  return (
    <div>
      <div className="product-search-section">
        <div className="container">
          <SearchContainer />
        </div>
      </div>
      <div className="container products-section">
        <Breadcrumbs breadcrumbsItems={breadCrumbs} />
        <div className="products-title">
          <img
            src={"/images/favicons/price-logo.jpg"}
            className="filter-logo"
            alt="filter-logo"
          />
          <h2>Filter products</h2>
        </div>
        <div className="products-body">
          <ProductFilterContainer />
          <TotalProductsContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import React from "react";
import FilterSubItems from "../../components/Products/ProductsStack/FilterSubItems";
import "./ProductsFilterContainer.style.scss";

const items = [
  "All",
  "Sunscreen",
  "Lotions",
  "Creams",
  "Sprays",
  "Gels",
  "Body Wash"
];

const ProductFilterContainer = () => {
  return (
    <div className="products-filter">
      <FilterSubItems title={"Price"} items={items} />
      <FilterSubItems title={"Sub-category"} items={items} />
      <FilterSubItems title={"Shipped From"} items={items} />
    </div>
  );
};
export default ProductFilterContainer;

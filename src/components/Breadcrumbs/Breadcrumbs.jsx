import React from "react";
import "./Breadcrumbs.style.scss";

const Breadcrumbs = ({ breadcrumbsItems }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbsItems.map(item => {
        return (
          <span className="breadcrumbs__text" key={item.id}>
            <a
              aria-current="page"
              className={"breadcrumbs__link " + item.active}
              href={item.path}
            >
              <span>{item.title}</span>
            </a>
            {item.active === "" && <i className="fa fa-chevron-right"></i>}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

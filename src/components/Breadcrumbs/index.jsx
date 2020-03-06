import React from "react";
import "./Breadcrumbs.style.scss";

const Breadcrumbs = ({parent, child}) => {
  return (
    <div className="breadcrumbs">
      <span className="breadcrumbs__text">
        <a aria-current="page" className="breadcrumbs__link active" href="/">
          <span>{parent}</span>
        </a>
      </span>
      <i className="fa fa-chevron-right"></i>
      <span className="breadcrumbs__text">
        <span>{child}</span>
      </span>
    </div>
  );
};

export default Breadcrumbs;

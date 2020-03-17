import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//import axios from 'axios';
import './SectionItems.style.scss';

const SectionItems = ({
  sectionData,
  productsIds,
  setProductsId,
  filterProductsId
}) => {
  const clickHandler = (id, arr) => {
    if (arr.includes(id)) {
      filterProductsId(id);
    } else {
      setProductsId(id);
      /*axios.post('/json/favorits.json', {
        "favorits" : {
          "productsIds" : [...productsIds]
        }
      }).then(res => console.log(res));*/
    }
  };

  return (
    <ul className="section-list">
      {sectionData.map(item => {
        return (
          <li className="section-list__item" key={item.id}>
            <div className="product-header">
              <img
                src={item.img}
                alt="section-img"
                className="section-list__img"
              />
              <div className="section-list__text-price">
                <div className="price-block">
                  <p className="price-block__text-dollar">$ </p>
                  {item.price}
                </div>
              </div>
            </div>
            <div className="product-footer">
              <p className="section-list__title">{item.title}</p>
              <p className="section-list__subtitle">{item.subtitle}</p>
              <div className="section-list__text-info">
                {item.info + ', '}
                <NavLink
                  to={'/' + item.slug}
                  className="section-list__link"
                >
                  {item.titleLink}
                </NavLink>
              </div>
              <i
                className={
                  productsIds.includes(item.id)
                    ? item.iconFill
                    : item.iconDefault
                }
                onClick={() => {
                  clickHandler(item.id, productsIds);
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

SectionItems.propTypes = {
  sectionData: PropTypes.arrayOf(Object)
};

export default SectionItems;

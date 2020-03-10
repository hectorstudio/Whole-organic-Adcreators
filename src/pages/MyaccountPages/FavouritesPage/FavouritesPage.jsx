import React from 'react';
import './FavouritesPage.scss'
import '../../../constants/css/CustomTitle.scss'
import Products from '../../../components/Products'
const FavourtesPage = () => {
  return (
    <div className="favourites">
      <h2 className="favourites__title custom-title">Favourites</h2>
      <Products />
    </div>
  )
}


export default FavourtesPage
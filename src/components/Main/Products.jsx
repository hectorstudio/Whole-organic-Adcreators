import React from 'react'
import { Switch, Route } from 'react-router'
import './Main.style.scss';
import ProductPage from '../../pages/Product/ProductPage'

const routes = [
  {
    id: '11',
    path: '/products',
    component: ProductPage
  }
];

const Products = () => {
  return (
    <main className={'products'}>
      <Switch>
        {routes.map(item => (
          <Route
            key={item.id}
            path={item.path}
            exact={item.exact}
            title={item.title}
            children={<item.component />}
          />
        ))}
      </Switch>
    </main>
  );
};

export default Products;

import React from 'react'
import { Switch, Route } from 'react-router'
import './Main.scss';
import ProductPage from '../../pages/ProductPage/ProductPage'

const routes = [
  {
    id: '11',
    path: '/products',
    component: ProductPage
  }
];

const Products = () => {
  return (
    <main className={'main'}>
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

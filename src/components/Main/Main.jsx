import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import CartPage from '../../pages/CartPage/CartPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import './Main.scss';

const routes = [
  {
    id: '1',
    path: '/',
    exact: true,
    title: 'Home',
    component: HomePage
  },
  {
    id: '2',
    path: '/about',
    title: 'About',
    component: AboutPage
  },
  {
    id: '3',
    path: '/cart',
    title: 'My Cart',
    component: CartPage
  }
];

const Main = () => {
  return (
    <main className={'main'}>
      <div className="container">
        <Switch>
          {routes.map(item => (
            <Route
              key={item.id}
              path={item.path}
              exact={item.exact}
              children={<item.component />}
            />
          ))}
        </Switch>
      </div>
    </main>
  );
};

export default Main;

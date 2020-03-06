import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import CartPage from '../../pages/CartPage/CartPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import LoginPage from '../../pages/LoginPage/LoginPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'
import SetupProfilePage from '../../pages/SetupProfilePage/SetupProfilePage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForogtPassPage';
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
  },
  {
    id: '4',
    path: '/login',
    title: 'Login',
    component: LoginPage
  },
  {
    id: '5',
    path: '/register',
    title: 'Register',
    component: RegisterPage
  },
  {
    id: '6',
    path: '/profilesetup',
    title: 'ProfileSetup',
    component: SetupProfilePage
  },
  {
    id: '7',
    path: '/forgot-pass',
    title: 'Register',
    component: ForgotPassPage
  },
];

const Main = () => {
  return (
    <main className={'main'}>
      <div className="form-container">
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

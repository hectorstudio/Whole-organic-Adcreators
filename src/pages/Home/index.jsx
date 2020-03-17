import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "../../pages/Home/HomePage/HomePage";
import CartPage from "../../pages/Account/CartPage/CartPage";
import AboutPage from "../../pages/Home/AboutPage/AboutPage";
import LoginPage from "../../pages/Auth/LoginPage/LoginPage";
import RegisterPage from "../../pages/Auth/RegisterPage/RegisterPage";
import SetupProfilePage from "../../pages/Account/SetupProfilePage/SetupProfilePage";
import ForgotPassPage from "../../pages/Auth/ForgotPassPage/ForgotPassPage";
import CreatePassPage from "../../pages/Auth/CreatePassPage/CreatePassPage";
import MyAccountPage from "../../pages/Account/MyAccountPage";
import CheckoutPage from "../../pages/Account/CartPage/CheckoutPage";
import "./Main.style.scss";

const routes = [
  {
    id: "1",
    path: "/",
    exact: true,
    title: "Home",
    component: HomePage
  },
  {
    id: "2",
    path: "/about",
    title: "About",
    component: AboutPage
  },
  {
    id: "3",
    path: "/cart",
    title: "My Cart",
    component: CartPage
  },
  {
    id: "4",
    path: "/login",
    title: "Login",
    component: LoginPage
  },
  {
    id: "5",
    path: "/register",
    title: "Register",
    component: RegisterPage
  },
  {
    id: "6",
    path: "/profilesetup",
    title: "ProfileSetup",
    component: SetupProfilePage
  },
  {
    id: "7",
    path: "/forgot-pass",
    title: "Forgot password",
    component: ForgotPassPage
  },
  {
    id: "8",
    path: "/create-pass",
    title: "Create a new password",
    component: CreatePassPage
  },
  {
    id: "9",
    path: "/my-account",
    component: MyAccountPage
  },
  {
    id: "10",
    path: "/checkout",
    component: CheckoutPage
  }
];

const Main = () => {
  return (
    <main className={"main"}>
      <div className="container">
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
      </div>
    </main>
  );
};

export default Main;

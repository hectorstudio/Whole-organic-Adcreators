const routes = {
  about: () => "/about",
  account: {
    ads: () => "/account/ads",
    cart: () => "/cart",
    checkout: () => "/checkout",
    favorites: () => "account/favorites",
    main: () => "/account/profile",
    membership: () => "/account/pricing",
    message: () => "/account/messages",
    profile: () => "/account/profile",
    recentlyViewed: () => "/account/recently-viewed"
  },
  createPassword: () => "/create-pass",
  forgotPassword: () => "/forgot-pass",
  home: () => "/",
  logIn: () => "/login",
  products: {
    main: () => "/products"
  },
  profileSetup: () => "/profilesetup",
  register: () => "/register"
};

export default routes;

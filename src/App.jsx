import React from 'react';
import NavigationSection from './sections/Header/NavigationSection';
import './App.scss';
import FooterSection from './sections/Footer/FooterSection';
import Main from './components/Main/Main';
import useResizeAware from 'react-resize-aware';
import HeaderContainer from './sections/Header/HeaderContainer';

function App() {
  const [resizeListener, sizes] = useResizeAware(); //use for check width and height of window
  /* const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
*/
  return (
    <React.Fragment>
      <header className="header">
        <div className="lg-container">
          {resizeListener}
          <HeaderContainer />
          <NavigationSection sizes={sizes} />
        </div>
      </header>
      <Main />
      <FooterSection />
    </React.Fragment>
  );
}

export default App;

/**
 * app/Layout/Main.js
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ children, disableToTop }) => {
  const location = useLocation();

  // Always go to top if change location
  useEffect(() => {
    if (!disableToTop) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="root" data-path={location.pathname}>
      <Header />
      <main className="main">
        <div className="content">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
  disableToTop: PropTypes.bool,
};

export default PageLayout;

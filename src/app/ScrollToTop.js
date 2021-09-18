/**
 * ScrollToTop.js
 */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

ScrollToTop.propTypes = {
  location: PropTypes.object,
};

export default withRouter(ScrollToTop);

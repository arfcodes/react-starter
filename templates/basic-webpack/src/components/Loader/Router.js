/**
 * components/Loader/Router.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const LoaderRouter = ({ show, percent }) => (
  <div className="loader__router" data-state={show ? 'show' : 'hidden'}>
    <div className="loader__router__bar" style={{ width: `${percent}%` }} />
  </div>
);

LoaderRouter.defaultProps = {
  percent: 0,
};

LoaderRouter.propTypes = {
  show: PropTypes.bool,
  percent: PropTypes.number,
};

export default LoaderRouter;

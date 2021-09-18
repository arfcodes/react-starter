/**
 * components/Loader/App.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import Spinner from 'components/Spinner/Chase';

const LoaderApp = ({ show }) => (
  <Modal className="loader__app" open={show} showClose={false}>
    <div className="loader__app__main">
      <div className="loader__app__spinner">
        <Spinner size="lg" />
      </div>
      <div className="loader__app__info">
        <p>Please wait...</p>
      </div>
    </div>
  </Modal>
);

LoaderApp.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default LoaderApp;

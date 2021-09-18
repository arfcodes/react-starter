/**
 * components/Loader/Page.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import Spinner from 'components/Spinner/Chase';

const LoaderPage = ({ info, spinner, open }) => (
  <Modal className="loader__page" open={open} showClose={false}>
    <div className="loader__page__content">
      <div className="loader__page__icon">
        {spinner ? (
          <>{spinner}</>
        ) : (
          <span className="loader__page__spinner">
            <Spinner size="lg" />
          </span>
        )}
      </div>
      <div className="loader__page__info">
        {info ? <>{info}</> : <p>Please wait...</p>}
      </div>
    </div>
  </Modal>
);

LoaderPage.propTypes = {
  info: PropTypes.node,
  spinner: PropTypes.node,
  open: PropTypes.bool.isRequired,
};

export default LoaderPage;

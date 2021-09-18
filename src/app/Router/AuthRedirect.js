/**
 * AuthRedirect.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const AuthRedirect = ({ location }) => (
  <Redirect
    to={{
      pathname: '/auth/login',
      state: {
        ref: location,
        messageType: 'error',
        messageContent: 'You must login first to access the page.',
      },
    }}
  />
);

AuthRedirect.propTypes = {
  location: PropTypes.object,
};

export default AuthRedirect;

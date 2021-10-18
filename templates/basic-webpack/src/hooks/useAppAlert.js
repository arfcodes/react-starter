/**
 * hooks/useAppAlert.js
 */
import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * Dialog Result Context
 */
export const AppAlertContext = createContext();

/**
 * Provider that take dialog result data
 */
export function AppAlertProvider({ children }) {
  const dialog = useAppAlertProvider();
  return (
    <AppAlertContext.Provider value={dialog}>
      {children}
    </AppAlertContext.Provider>
  );
}

AppAlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get dialog result provider
 */
export function useAppAlertProvider() {
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const [actions, setActions] = useState(null);

  const showAppAlert = (
    alertMessage,
    alertTitle = '',
    alertVariant = 'success',
    alertActions = null,
  ) => {
    document.body.classList.add('scroll-off');
    setStatus(true);
    setMessage(alertMessage);
    setTitle(alertTitle);
    setVariant(alertVariant);
    setActions(alertActions);
  };

  const hideAppAlert = () => {
    document.body.classList.remove('scroll-off');
    document.body.style.overflow = 'visible';
    setStatus(true);
    setMessage('');
    setTitle('');
    setVariant('');
    setActions(null);
  };

  return {
    status,
    title,
    message,
    variant,
    actions,
    showAppAlert,
    hideAppAlert,
  };
}

/**
 * Hook for get dialog result context data
 */
export const useAppAlert = () => useContext(AppAlertContext);

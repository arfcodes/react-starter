/**
 * components/Modal/Alert/Hook.js
 */
import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * Dialog Result Context
 */
export const ModalAlertContext = createContext();

/**
 * Provider that take dialog result data
 */
export function ModalAlertProvider({ children }) {
  const dialog = useModalAlertProvider();
  return (
    <ModalAlertContext.Provider value={dialog}>
      {children}
    </ModalAlertContext.Provider>
  );
}

ModalAlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get dialog result provider
 */
export function useModalAlertProvider() {
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('success');
  const [actions, setActions] = useState(null);

  const showModalAlert = (
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

  const hideModalAlert = () => {
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
    showModalAlert,
    hideModalAlert,
  };
}

/**
 * Hook for get dialog result context data
 */
export const useModalAlert = () => useContext(ModalAlertContext);

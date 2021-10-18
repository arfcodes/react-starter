/**
 * hooks/useAppLoader.js
 */
import React, { useState, useContext, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * App Loader Context
 */
export const AppLoaderContext = createContext();

/**
 * Provider that take loader data
 */
export function AppLoaderProvider({ children }) {
  const loader = useAppLoaderProvider();
  return (
    <AppLoaderContext.Provider value={loader}>
      {children}
    </AppLoaderContext.Provider>
  );
}

AppLoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Hook for get loader provider
 */
export function useAppLoaderProvider() {
  const [status, setStatus] = useState(false);

  const showLoader = useCallback((loaderStatus = true) => {
    setScroll(loaderStatus);
    setStatus(loaderStatus);
  });

  const setScroll = (loaderStatus) => {
    if (loaderStatus) {
      document.body.classList.add('scroll-off');
    } else {
      document.body.classList.remove('scroll-off');
    }
  };

  return {
    status,
    setStatus,
    showLoader,
  };
}

/**
 * Hook for get loader context data
 */
export const useAppLoader = () => useContext(AppLoaderContext);

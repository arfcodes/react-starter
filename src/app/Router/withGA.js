/**
 * App/Main/Router/withGA.js
 */
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

// const url = new URL(window.location.href);
// const isDebug = !!url.searchParams.get('__gatest');
// ReactGA.initialize('UA-122823358-1', { debug: isDebug });

ReactGA.initialize('UA-123456789-1');

export default (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    // eslint-disable-next-line react/prop-types
    const { pathname } = props.location;
    useEffect(() => trackPage(pathname), [pathname]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

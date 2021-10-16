/**
 * components/Loader/App.js
 */
import React from 'react';

import { useAppLoader } from './Hook';
import Base from './Base';

const LoaderApp = () => {
  const { status } = useAppLoader();

  return <Base show={status} />;
};

export default LoaderApp;

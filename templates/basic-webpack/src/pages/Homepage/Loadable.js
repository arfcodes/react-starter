/**
 * Asynchronously loads the component for About
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'app/Page/Loader';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});

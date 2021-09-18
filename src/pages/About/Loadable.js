/**
 * Asynchronously loads the component for About
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/Loader/Content';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});

// // With timeout
// export default loadable(
//   // eslint-disable-next-line arrow-body-style
//   () => {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(import('./index')), 20000);
//     });
//   },
//   {
//     fallback: <LoadingIndicator />,
//   },
// );

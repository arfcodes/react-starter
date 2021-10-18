/**
 * App/Main.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import { AppAlertProvider } from 'hooks/useAppAlert';
import { AppLoaderProvider } from 'hooks/useAppLoader';
import Layout from './Layout/Main';

// Create a query client
const queryOptions = {
  queries: {
    refetchOnWindowFocus: true, // Window Focus Refetching
  },
};
const queryClient = new QueryClient({
  defaultOptions: queryOptions,
});

const Main = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider maxSnack={3}>
      <AppLoaderProvider>
        <AppAlertProvider>
          <Layout>{children}</Layout>
        </AppAlertProvider>
      </AppLoaderProvider>
    </SnackbarProvider>
  </QueryClientProvider>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;

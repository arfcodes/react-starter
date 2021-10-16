/**
 * App/Main.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import Layout from 'components/Layout';
import { ModalAlertProvider } from 'components/Modal/Alert/Hook';
import ModalAlert from 'components/Modal/Alert/Result';

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
      <ModalAlertProvider>
        <Layout>
          {children}
        </Layout>
        <ModalAlert />
      </ModalAlertProvider>
    </SnackbarProvider>
  </QueryClientProvider>
);

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;

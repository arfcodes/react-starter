import { useEffect } from 'react';
import { useQuery, useInfiniteQuery, useMutation } from 'react-query';

import { useAppLoader } from '../useAppLoader';
import useError from './Error';

/**
 * useRequest
 */
export default function useRequest(queryKey, queryFn, queryOptions = {}) {
  const { showError } = useError();

  const onError = (error) => {
    showError(error);
  };
  const queryOpts = { onError, ...queryOptions };
  return useQuery(queryKey, queryFn, queryOpts);
}

/**
 * useInfiniteRequest
 */
export function useInfiniteRequest(queryKey, queryFn, queryOptions = {}) {
  const { showError } = useError();

  const onError = (error) => {
    showError(error);
  };
  const queryOpts = {
    onError,
    ...queryOptions,
  };
  return useInfiniteQuery(queryKey, queryFn, queryOpts);
}

/**
 * useAppRequest
 *
 * Request with app loader
 */
export function useAppRequest(queryKey, queryFn, queryOptions = {}) {
  const { showLoader } = useAppLoader();

  useEffect(() => {
    // Show loader
    showLoader();
  }, []);

  const onSettled = () => {
    // setTimeout(() => showLoader(false), 3000);
    showLoader(false);
  };
  const queryOpts = { onSettled, ...queryOptions };
  return useRequest(queryKey, queryFn, queryOpts);
}

/**
 * useMutationRequest
 */
export function useMutationRequest(requestFn, queryOptions = {}) {
  const { showError } = useError();

  const onError = (error) => {
    showError(error);
  };
  const queryOpts = {
    onError,
    ...queryOptions,
  };
  return useMutation(requestFn, queryOpts);
}

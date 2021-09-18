/**
 * services/http/helpers.js
 */
import { ERROR_AUTH } from '../constants';

export const checkRequestErrorCode = (error, errorCode) => {
  let isError = false;
  if (typeof error.response === 'undefined') {
    // eslint-disable-next-line no-console
    console.log(error);
  } else if (errorCode === ERROR_AUTH && error.response.status === 401) {
    isError = true;
  }
  return isError;
};

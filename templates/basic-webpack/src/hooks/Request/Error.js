/**
 * hooks/Request/Error
 */
import { useAppAlert } from '../useAppAlert';

/**
 * Hook for show request error
 */
export default function useRequestError() {
  const { showAppAlert, hideAppAlert } = useAppAlert();

  const showError = (error, defaultMessage = '', defaultTitle = '') => {
    const { response } = error;
    const variant = 'danger';
    let message = '';
    let title = '';

    if (
      defaultTitle === '' &&
      response &&
      typeof response.statusText !== 'undefined'
    ) {
      title = response.statusText;
    } else if (defaultTitle === '') {
      title = 'Oops! Sorry, it’s failed.';
    } else if (defaultTitle && defaultTitle !== '') {
      title = defaultTitle;
    }

    if (typeof response !== 'undefined') {
      if (response && [400, 401].includes(response.status)) {
        message = 'Not authenticated';
      } else if (response && response.status === 500) {
        message = 'A server error occurred';
      } else if (response && response.data) {
        message = response.data.error;
      } else if (typeof response.data.message !== 'undefined') {
        // eslint-disable-next-line prefer-destructuring
        message = response.data.message;
      } else if (message && message !== '') {
        message = defaultMessage;
      }
      // else if (!status) {
      //   message = 'Cannot connect to the internet';
      // }
    } else if (typeof error === 'string') {
      message = error;
    } else if (message && message !== '') {
      message = defaultMessage;
    }

    if (!message || message === '') {
      message = 'Sorry request error, please try again.';
    }

    showAppAlert(message, title, variant);
  };

  const clearError = () => {
    hideAppAlert();
  };

  return {
    showError,
    clearError,
  };
}

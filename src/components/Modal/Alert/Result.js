/**
 * components/Modal/Alert/Result.js
 */
import React from 'react';

import { useModalAlert } from './Hook';
import Base from './index';

const AlertResult = () => {
  const { status, variant, title, message, actions } = useModalAlert();

  let buttonActions = actions;
  if (!buttonActions) {
    buttonActions = [
      {
        name: 'close',
        label: 'Ok',
        variant,
      },
    ];
  }

  return (
    <Base open={status} variant={variant} title={title} actions={buttonActions}>
      {message}
    </Base>
  );
};

export default AlertResult;

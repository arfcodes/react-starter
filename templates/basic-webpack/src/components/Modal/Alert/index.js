/**
 * components/Modal/Alert/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IoWarning,
  IoInformationCircle,
  IoCheckmarkCircle,
  IoRemoveCircle,
} from 'react-icons/io5';

import Base from '../Actions';

const ModalAlert = (props) => {
  const {
    open,
    variant,
    title,
    children,
    actions,
    buttonLabel,
    buttonAction,
  } = props;

  //
  // getIcon
  //
  const getIcon = () => {
    if (variant === 'warning') {
      return <IoWarning />;
    }
    if (variant === 'danger') {
      return <IoRemoveCircle />;
    }
    if (variant === 'success') {
      return <IoCheckmarkCircle />;
    }
    return <IoInformationCircle />;
  };

  let buttonActions = actions;
  if (!buttonActions) {
    buttonActions = [
      {
        name: buttonAction ? 'button_custom' : 'close',
        label: buttonLabel,
        handler: buttonAction,
        variant,
      },
    ];
  }

  return (
    <Base
      open={open}
      className={classNames('modal-alert', `modal-alert--${variant}`)}
      actions={buttonActions}
    >
      <div className="modal-alert__content">
        <div className="modal__icon">{getIcon()}</div>
        {title && (
          <div className="modal__title">
            <h2>{title}</h2>
          </div>
        )}
        {children && <div className="modal__info">{children}</div>}
      </div>
    </Base>
  );
};

ModalAlert.defaultProps = {
  variant: 'gray',
  buttonLabel: 'Ok',
};

ModalAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    'gray',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
  ]),
  title: PropTypes.string,
  children: PropTypes.string,
  actions: PropTypes.array,
  buttonLabel: PropTypes.string,
  buttonAction: PropTypes.func,
};

export default ModalAlert;

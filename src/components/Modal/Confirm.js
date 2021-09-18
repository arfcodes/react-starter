/**
 * components/Modal/Confirm.js
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

import Base from './Actions';

const ModalConfirm = (props) => {
  const {
    open,
    variant,
    title,
    children,
    submitLabel,
    cancelLabel,
    onSubmit,
    onCancel,
    hideIcon,
  } = props;
  //
  // getIcon
  //
  const getIcon = () => {
    if (hideIcon) {
      return null;
    }
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

  const defaultSubmit = (setVisibility, evt) => {
    evt.preventDefault();
    setVisibility(false);
  };

  return (
    <Base
      open={open}
      className={classNames(
        'modal-alert',
        'modal__confirm',
        `modal-alert--${variant}`,
      )}
      actions={[
        {
          name: 'submit',
          label: submitLabel,
          handler: onSubmit || defaultSubmit,
          variant: 'primary',
        },
        {
          name: onCancel ? 'cancel_custom' : 'close',
          label: cancelLabel,
          handler: onCancel,
          variant: 'gray',
        },
      ]}
    >
      <div className="modal-alert__content">
        <div className="modal__icon">{getIcon()}</div>
        <div className="modal__title">
          <h2>{title}</h2>
        </div>
        {children ? <div className="modal__info">{children}</div> : null}
      </div>
    </Base>
  );
};

ModalConfirm.defaultProps = {
  variant: 'clean',
  submitLabel: 'Yes',
  cancelLabel: 'No',
  hideIcon: true,
};

ModalConfirm.propTypes = {
  open: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    'clean',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
  ]),
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  submitLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  hideIcon: PropTypes.bool,
};

export default ModalConfirm;

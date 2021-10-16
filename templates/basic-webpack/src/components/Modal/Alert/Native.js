/**
 * components/Modal/Alert/Native.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IoWarning,
  IoInformationCircle,
  IoCheckmarkCircle,
  IoRemoveCircle,
} from 'react-icons/io5';

import Button from 'components/Button';
import Base from '../Base';

const Native = (props) => {
  const { open, variant, title, children, buttonLabel, buttonAction } = props;
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(open);

    return () => {
      setVisibility(false);
    };
  }, [open]);

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

  return (
    <Base
      data-state={visibility ? 'open' : 'close'}
      className={classNames('modal-alert', `modal-alert--${variant}`)}
    >
      <div className="modal__content">
        <div className="modal__icon">{getIcon()}</div>
        <div className="modal__title">
          <h2>{title}</h2>
        </div>
        {children ? <div className="modal__info">{children}</div> : null}
        <div className="modal__action">
          <Button
            label={buttonLabel}
            variant={variant}
            radius="lg"
            handler={(evt) => {
              evt.preventDefault();
              if (buttonAction) {
                buttonAction();
              } else {
                setVisibility(false);
              }
            }}
          />
        </div>
      </div>
    </Base>
  );
};

Native.defaultProps = {
  variant: 'gray',
  buttonLabel: 'Ok',
};

Native.propTypes = {
  open: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    'gray',
    'primary',
    'success',
    'warning',
    'danger',
    'info',
  ]),
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonAction: PropTypes.func,
};

export default Native;

/**
 * components/Modal/index.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const Modal = ({ open, onClose, ...others }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(open);

    return () => {
      setVisibility(false);
    };
  }, [open]);

  return (
    <Base
      data-state={visibility ? 'open' : 'close'}
      onClick={(evt) => {
        evt.preventDefault();
        if (onClose) {
          onClose();
        } else {
          setVisibility(false);
        }
      }}
      {...others}
    />
  );
};

Modal.defaultProps = {
  showClose: true,
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node,
  showClose: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Modal;

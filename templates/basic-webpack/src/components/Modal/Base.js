/**
 * components/Modal/Base.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MdClose } from 'react-icons/md';

const ModalBase = ({ children, className, showClose, onClose, ...others }) => (
  <div className={classNames('modal', className)} {...others}>
    <div className="modal__overlay" />
    <div className="modal__main">
      {showClose ? (
        <div className="modal__close">
          <button
            type="button"
            onClick={(evt) => {
              evt.preventDefault();
              if (onClose) {
                onClose();
              }
            }}
          >
            <span>
              <MdClose />
            </span>
          </button>
        </div>
      ) : null}
      <div className="modal__content">{children}</div>
    </div>
  </div>
);

ModalBase.defaultProps = {
  showClose: false,
};

ModalBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showClose: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalBase;

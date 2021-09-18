/**
 * components/Button/Disabled.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const ButtonDisabled = ({ buttonProps, className, children }) => (
  <div className="button__root">
    <button
      disabled
      className={className}
      type="button"
      onClick={(evt) => evt.preventDefault()}
      {...buttonProps}
    >
      {children}
    </button>
  </div>
);

ButtonDisabled.propTypes = {
  children: PropTypes.node,
  buttonProps: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ButtonDisabled;

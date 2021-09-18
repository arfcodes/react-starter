/**
 * components/Button/Content.js
 */
import React from 'react';
import PropTypes from 'prop-types';

const ButtonContent = ({ label, icon, iconPosition, hideIcon }) => {
  //
  // getIcon
  //
  const getIcon = () => (
    <>
      {icon ? (
        <span className="button__content__icon">
          {typeof icon === 'string' ? <img src={icon} alt="" /> : <>{icon}</>}
        </span>
      ) : null}
    </>
  );

  return (
    <div className="button__content">
      {!hideIcon && iconPosition === 'left' ? getIcon() : null}
      <span className="button__content__label">{label}</span>
      {!hideIcon && iconPosition === 'right' ? getIcon() : null}
    </div>
  );
};

ButtonContent.defaultProps = {
  iconPosition: 'right',
};

ButtonContent.propTypes = {
  label: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  hideIcon: PropTypes.bool,
};

export default ButtonContent;

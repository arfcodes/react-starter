/**
 * components/Spinner/Base.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SpinnerBase = ({ size, color, children }) => (
  <div className={classNames('spinner', `spinner--${size} spinner-${color}`)}>
    {children}
  </div>
);

SpinnerBase.defaultProps = {
  size: 'md',
  color: 'muted',
};

SpinnerBase.propTypes = {
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  color: PropTypes.oneOf([
    'black',
    'muted',
    'white',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info,',
  ]),
  children: PropTypes.node,
};

export default SpinnerBase;

/**
 * components/Button/Loader.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from 'components/Spinner/Circle';

const ButtonLoader = ({ variant, className }) => (
  <div className="button__root">
    <div className={classNames('button__loader', className)}>
      <Spinner color={variant} size="xs" />
    </div>
  </div>
);

ButtonLoader.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ButtonLoader;

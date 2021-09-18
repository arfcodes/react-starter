/**
 * components/Button/Main.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const {
    path,
    handler,
    isLinkOutside,
    buttonProps,
    className,
    children,
  } = props;

  return (
    <div className="button__root">
      {handler ? (
        <button
          className={className}
          type="button"
          onClick={handler}
          {...buttonProps}
        >
          {children}
        </button>
      ) : (
        <>
          {isLinkOutside ? (
            <a
              className={className}
              href={path}
              target="_blank"
              {...buttonProps}
            >
              {children}
            </a>
          ) : (
            <Link className={className} to={path} {...buttonProps}>
              {children}
            </Link>
          )}
        </>
      )}
    </div>
  );
};

Button.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isLinkOutside: PropTypes.bool,
  handler: PropTypes.func,
  buttonProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;

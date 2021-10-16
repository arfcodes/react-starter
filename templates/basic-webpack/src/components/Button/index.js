/**
 * components/Button/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Main from './Main';
import Loader from './Loader';
import Content from './Content';
import Disabled from './Disabled';

const Button = (props) => {
  const {
    path,
    handler,
    variant,
    size,
    radius,
    isLinkOutside,
    loading,
    disabled,
    buttonProps,
    ...others
  } = props;

  const buttonClasses = classNames(
    'button',
    `button--${variant}`,
    `bg--${variant}`,
    `button--${size}`,
    `radius--${radius}`,
    {
      disabled,
    },
  );

  if (loading) {
    return <Loader className={buttonClasses} />;
  }

  if (disabled) {
    return (
      <Disabled className={buttonClasses} buttonProps={buttonProps}>
        <Content {...others} />
      </Disabled>
    );
  }

  return (
    <Main
      path={path}
      handler={handler}
      isLinkOutside={isLinkOutside}
      buttonProps={buttonProps}
      className={buttonClasses}
    >
      <Content {...others} />
    </Main>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  radius: 'xs',
  iconPosition: 'left',
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'gray',
    'white',
    'black',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
  ]),
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  radius: PropTypes.oneOf(['none', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  label: PropTypes.node,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  isLinkOutside: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  handler: PropTypes.func,
  buttonProps: PropTypes.object,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  hideIcon: PropTypes.bool,
};

export default Button;

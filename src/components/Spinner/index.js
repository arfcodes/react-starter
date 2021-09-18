/**
 * components/Spinner.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = ({ type, size, color }) => {
  //
  // getDivs
  const getDivs = () => {
    const divs = [];
    let count = 0;
    let suffix = 'dot';

    if (type === 'swing' || type === 'bounce') {
      count = 3;
    } else if (type === 'wander' || type === 'flow') {
      count = 3;
    } else if (type === 'fold') {
      count = 4;
    } else if (type === 'wave') {
      count = 5;
    } else if (type === 'chase') {
      count = 6;
    } else if (type === 'grid') {
      count = 9;
    } else if (type === 'circle' || type === 'circle-fade') {
      count = 12;
    }
    if (type === 'wave') {
      suffix = 'react';
    } else if (type === 'grid' || type === 'fold' || type === 'wander') {
      suffix = 'cube';
    }
    for (let i = 0; i < count; i += 1) {
      divs.push(<div className={`sk-${type}-${suffix}`} />);
    }
    return divs;
  };

  return (
    <div className={classNames('spinner', `spinner--${size} spinner-${color}`)}>
      <div className={classNames('spinner__main', `sk-${type}`)}>
        {getDivs()}
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  type: 'chase',
  size: 'md',
  color: 'muted',
};

Spinner.propTypes = {
  type: PropTypes.oneOf([
    'plane',
    'chase',
    'bounce',
    'wave',
    'pulse',
    'flow',
    'swing',
    'circle',
    'circle-fade',
    'grid',
    'flod',
    'wander',
  ]),
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
};

export default Spinner;

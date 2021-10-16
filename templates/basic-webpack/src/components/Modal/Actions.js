/**
 * components/Modal/Actions.js
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Base from './Base';

const ModalActions = (props) => {
  const { open, actions, children, ...others } = props;
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(open);

    return () => {
      setVisibility(false);
    };
  }, [open]);

  // Get action button
  const getAction = (actionProps) => {
    const { name, handler, ...otherProps } = actionProps;
    if (name === 'close') {
      return (
        <Button
          handler={(evt) => {
            evt.preventDefault();
            setVisibility(false);
          }}
          {...otherProps}
        />
      );
    }
    if (handler) {
      return (
        <Button
          handler={(evt) => {
            evt.preventDefault();
            handler(setVisibility, evt);
          }}
          {...otherProps}
        />
      );
    }
    return <Button handler={handler} {...otherProps} />;
  };

  return (
    <Base data-state={visibility ? 'open' : 'close'} {...others}>
      {children}
      <div className="modal__actions">
        {actions.map((actionProps) => (
          <div key={`action-${actionProps.name}`} className="modal__action">
            {getAction(actionProps)}
          </div>
        ))}
      </div>
    </Base>
  );
};

ModalActions.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ModalActions;

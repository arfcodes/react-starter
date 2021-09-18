/**
 * components/Spinner/Wander.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerWander = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-wander">
      <div className="sk-wander-cube"></div>
      <div className="sk-wander-cube"></div>
      <div className="sk-wander-cube"></div>
    </div>
  </Base>
);

export default SpinnerWander;

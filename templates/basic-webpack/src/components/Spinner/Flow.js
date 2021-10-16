/**
 * components/Spinner/Flow.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerFlow = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-flow">
      <div className="sk-flow-dot"></div>
      <div className="sk-flow-dot"></div>
      <div className="sk-flow-dot"></div>
    </div>
  </Base>
);

export default SpinnerFlow;

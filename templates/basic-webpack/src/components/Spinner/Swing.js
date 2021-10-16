/**
 * components/Spinner/Swing.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerSwing = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-swing">
      <div className="sk-swing-dot"></div>
      <div className="sk-swing-dot"></div>
    </div>
  </Base>
);

export default SpinnerSwing;

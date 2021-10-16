/**
 * components/Spinner/Wave.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerWave = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-wave">
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
      <div className="sk-wave-rect"></div>
    </div>
  </Base>
);

export default SpinnerWave;

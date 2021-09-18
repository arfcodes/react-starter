/**
 * components/Spinner/Circle.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerCircle = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-circle">
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
      <div className="sk-circle-dot"></div>
    </div>
  </Base>
);

export default SpinnerCircle;

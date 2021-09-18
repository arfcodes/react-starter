/**
 * components/Spinner/Circle.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerCircleFade = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-circle-fade">
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
      <div className="sk-circle-fade-dot"></div>
    </div>
  </Base>
);

export default SpinnerCircleFade;

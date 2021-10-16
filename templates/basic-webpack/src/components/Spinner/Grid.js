/**
 * components/Spinner/Grid.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerGrid = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-grid">
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
      <div className="sk-grid-cube"></div>
    </div>
  </Base>
);

export default SpinnerGrid;

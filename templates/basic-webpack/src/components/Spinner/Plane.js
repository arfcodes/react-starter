/**
 * components/Spinner/Plane.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import React from 'react';
import Base from './Base';

const SpinnerPlane = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-plane" />
  </Base>
);

export default SpinnerPlane;

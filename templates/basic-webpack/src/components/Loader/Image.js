import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const LoaderImage = ({ svgProps, ...props }) => (
  <div className="loader__image" {...props}>
    <ContentLoader
      speed={2}
      width={512}
      height={512}
      viewBox="0 0 512 512"
      backgroundColor="#dfdfdf"
      foregroundColor="#d0d0d0"
      {...svgProps}
    >
      <path d="M 368 224 c 26.5 0 48 -21.5 48 -48 s -21.5 -48 -48 -48 s -48 21.5 -48 48 s 21.5 48 48 48 z" />
      <path d="M 452 64 H 60 c -15.6 0 -28 12.7 -28 28.3 v 327.4 c 0 15.6 12.4 28.3 28 28.3 h 392 c 15.6 0 28 -12.7 28 -28.3 V 92.3 c 0 -15.6 -12.4 -28.3 -28 -28.3 z M 348.9 261.7 c -3 -3.5 -7.6 -6.2 -12.8 -6.2 c -5.1 0 -8.7 2.4 -12.8 5.7 L 304.6 277 c -3.9 2.8 -7 4.7 -11.5 4.7 c -4.3 0 -8.2 -1.6 -11 -4.1 c -1 -0.9 -2.8 -2.6 -4.3 -4.1 L 224 215.3 c -4 -4.6 -10 -7.5 -16.7 -7.5 c -6.7 0 -12.9 3.3 -16.8 7.8 L 64 368.2 V 107.7 c 1 -6.8 6.3 -11.7 13.1 -11.7 h 357.7 c 6.9 0 12.5 5.1 12.9 12 l 0.3 260.4 l -99.1 -106.7 z" />
    </ContentLoader>
  </div>
);

LoaderImage.propTypes = {
  svgProps: PropTypes.object,
};

export default LoaderImage;

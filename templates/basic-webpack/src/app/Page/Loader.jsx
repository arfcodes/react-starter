import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderContent = (props) => (
  <div className="loader__content">
    <ContentLoader
      viewBox="0 0 400 400"
      height={400}
      width={400}
      speed={2}
      {...props}
    >
      <rect x="20" y="8" rx="0" ry="0" width="100" height="100" />
      <rect x="20" y="120" rx="0" ry="0" width="100" height="10" />
      <rect x="170" y="8" rx="0" ry="0" width="300" height="15" />
      <rect x="170" y="30" rx="0" ry="0" width="300" height="15" />
      <rect x="170" y="52" rx="0" ry="0" width="100" height="15" />
    </ContentLoader>
  </div>
);

LoaderContent.metadata = {
  name: 'Aditi Tipnis', // My name
  github: 'adititipnis', // Github username
  description: 'Forum Post', // Little tagline
  filename: 'Loader', // filename of your loader
};

export default LoaderContent;

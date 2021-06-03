import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="140" cy="142" r="115" />
      <rect x="0" y="271" rx="6" ry="6" width="280" height="25" />
      <rect x="0" y="308" rx="10" ry="10" width="280" height="84" />
      <rect x="0" y="415" rx="6" ry="6" width="90" height="35" />
      <rect x="122" y="405" rx="25" ry="25" width="154" height="55" />
    </ContentLoader>
  );
}

export default LoadingBlock;

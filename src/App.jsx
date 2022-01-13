import React from 'react';

import HeaderPage from './HeaderPage';
import BannerPage from './BannerPage';
import PaddingBox from './PaddingBox';

export default function App() {
  return (
    <div>
      <HeaderPage />
      <PaddingBox />
      <BannerPage />
      <PaddingBox />
    </div>
  );
}

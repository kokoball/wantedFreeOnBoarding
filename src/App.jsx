import React from 'react';

import Header from './Header';
import IndexPage from './IndexPage';
import PaddingBox from './PaddingBox';

export default function App() {
  return (
    <div>
      <Header />
      <PaddingBox />
      {/* <Slider /> */}
      <IndexPage />
      <PaddingBox />
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';

import BannerContainer from './BannerContainer';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const BannerRow = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function BannerPage() {
  return (
    <Container>
      <BannerRow>
        <BannerContainer />
      </BannerRow>
    </Container>
  );
}

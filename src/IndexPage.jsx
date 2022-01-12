import React from 'react';
import styled from 'styled-components';

import IndexBusContainer from './IndexBusContainer';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const IndexRow = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default function IndexPage() {
  return (
    <Container>
      <IndexRow>
        <IndexBusContainer />
      </IndexRow>
    </Container>
  );
}

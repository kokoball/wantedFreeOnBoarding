import React from 'react';

import styled from 'styled-components';

const Padding = styled.div`
  height: 50px;
  @media (min-width: 768px) and (max-width: 1100px){
    height: 110px;
  }
`;

export default function PaddingBox() {
  return (
    <>
      <Padding />
    </>
  );
}

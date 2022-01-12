import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 80%;
  height: 183px;
  @media screen and (min-width: 1200px) {
    width: 1060px;
    height: 300px;
  }
  
`;

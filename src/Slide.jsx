import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 800px;
  height: 300px;
  margin-top: 15px;
  padding: 0 7%;
  /* @media (min-width: 1200px) {
    max-width: 1060px;
    width : 1060px;
    height: 300px;
  }   */
`;

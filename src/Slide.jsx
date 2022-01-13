import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  width: 96%;
  height: 183px;
  margin-top: 15px;
  padding: 0 2%;
  object-fit: cover;
  @media (min-width: 1200px) {
    height: 300px;
  }  
`;

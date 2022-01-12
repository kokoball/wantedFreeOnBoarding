import React from 'react';
import styled from 'styled-components';
import Slide from './Slide';

import img1 from './images/banner1.jpg';
import img2 from './images/banner2.jpg';
import img3 from './images/banner3.jpg';
import img4 from './images/banner4.jpg';
import img5 from './images/banner5.jpg';
import img6 from './images/banner6.jpg';
import img7 from './images/banner7.jpg';

const Container = styled.section`
  width: 100%
`;

const BusCard = styled.div`
  margin-top: 10px;
    display: inline-block;
    width: 75%;
    max-width: 100%;
    height: 140px;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: -webkit-transform .3s;
    -webkit-transition: transform .3s;
    transition: transform .3s;
  box-sizing: border-box;
  
`;

const DestinationShiftRow = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7941e;
  
    width: 100%;
    height: 21px;
    padding-top: 9px;
`;

const BusType = styled.div`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin-left: 10px;
  
  @media(max-width: 576px){
    font-size: 12px;
    height: auto;
  }
`;

const Info = styled.div`
  /* width: 75%;
    max-width: 100%;
    height: 140px;
  padding-top: 41px; */
  /* border-bottom: 1px #e4e4e4 solid;
  border-left: 1px #e4e4e4 solid;
  border-right: 1px #e4e4e4 solid; */
  
    /* padding-top: 27px; */
    width: calc(100% - 2px);
    height: 183px;
`;

const MobileSwiper = styled.div`
  position: relative;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  
  &::-webkit-scrollbar { 
    display: none !important; // 윈도우 크롬 등
  }
`;

const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  cursor: pointer;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
const Center = styled.div`
  text-align: center;
`;

export default React.memo(({
  sliderRef,
  mobileTypes,
  leftButton,
  rightButton,

}) => {
  function getTypeName(type) {
    if (type === 0) return '0';
    if (type === 1) return '1';
    if (type === 2) return '2';
    if (type === 3) return '3';
    if (type === 4) return '4';
    if (type === 5) return '5';
    if (type === 6) return '6';
    if (type === 7) return '7';
    return '22';
  }
  function getTypeImg(type) {
    if (type === 0) return img1;
    if (type === 1) return img2;
    if (type === 2) return img3;
    if (type === 3) return img4;
    if (type === 4) return img5;
    if (type === 5) return img6;
    if (type === 6) return img7;
    return img1;
  }

  return (
    <Container>
      <MobileSwiper
        ref={sliderRef}
      >
        {mobileTypes.map((type, index) => (
          <BusCard busType={type} key={type} index={index}>
            <DestinationShiftRow busType={type}>
              <BusType>
                {getTypeName(type)}
              </BusType>
            </DestinationShiftRow>
            <Info>
              <Slide img={getTypeImg(type)} />
            </Info>
          </BusCard>
        ))}
      </MobileSwiper>
      <Center>
        <Button ref={leftButton}>Next</Button>
        <Button ref={rightButton}>Next</Button>
      </Center>
    </Container>
  );
});

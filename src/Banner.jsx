import React from 'react';
import styled from 'styled-components';
import SlideImg from './SlideImg';

import { getTypeH2, getTypeH3, getTypeImg } from './utils';

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

const InformationDiv = styled.div`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;

  @media (min-width: 1200px) {
    position: absolute;
    top: 140px;
    width: 270px;
    height: 146px;
    border-radius: 4px;
    background-color: #fff;
    text-align: left;
    left: 90px;
  }
`;

const Informationh2 = styled.h2`
  margin: 0 20px;
  margin-top: 10px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`;

const Informationh3 = styled.h3`
  margin: 0;
  margin-top: 6px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.15;
  color: #666;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 1200px) {
    margin: 0 20px;
    height: 38px;
    font-size: 14px;
    line-height: 1.64;
    color: #333;
  }
`;

const Informationhr = styled.hr`
  display: none;
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;

  @media (min-width: 1200px) {
    display: block;
  }
`;

const InforButtonDiv = styled.div`
  margin: 6px 0 0 13px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
`;

const InforButtonSpan = styled.span`
  width: 100%;
  font-size: inherit;
  font-weight: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  color: inherit;
`;

const InforButtonSpan2 = styled.span`
  margin-top: -2px;
  margin-right: -1px;
  margin-left: 2px;
`;

const InforButtonSpan3 = styled.span`
  width: 100%;
  align-items: inherit;
  justify-content: inherit;
`;

const InforButtonSvg = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  font-size: inherit;
`;

const Info = styled.div`
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

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: 200px;
  width: 30px;
  height: 60px;
  opacity: .5;
  border-radius: 15px;
  font-size: 16px;
  
  @media (max-width: 1200px) {
    display: none;
  }
`;
const ButtonSpan = styled.span`
  width: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: inherit;
  -ms-flex-align: inherit;
  align-items: inherit;
  -webkit-justify-content: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
`;

export default React.memo(({
  sliderRef,
  mobileTypes,
  leftButton,
  rightButton,

}) => (
  <Container>
    <MobileSwiper
      ref={sliderRef}
    >
      {mobileTypes.map((type, index) => (
        <BusCard busType={type} key={type} index={index}>
          <Info>
            <SlideImg img={getTypeImg(type)} />
          </Info>
          <InformationDiv busType={type}>
            <Informationh2>
              {getTypeH2(type)}
            </Informationh2>
            <Informationh3>
              {getTypeH3(type)}
            </Informationh3>
            <Informationhr />
            <div style={{ height: '10px' }} />
            <InforButtonDiv>
              <InforButtonSpan>
                바로가기
                <InforButtonSpan2>
                  <InforButtonSpan3>
                    <InforButtonSvg viewBox="0 0 18 18">
                      <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
                    </InforButtonSvg>
                  </InforButtonSpan3>
                </InforButtonSpan2>
              </InforButtonSpan>
            </InforButtonDiv>
          </InformationDiv>
        </BusCard>
      ))}
    </MobileSwiper>
    <Button ref={rightButton} style={{ right: 'calc((100% - 1200px) / 2)' }}>
      <ButtonSpan>
        <svg style={{ width: '1em', height: '1em' }} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg>
      </ButtonSpan>
    </Button>
    <Button ref={leftButton} style={{ left: 'calc((100% - 1200px) / 2' }}>
      <ButtonSpan>
        <svg style={{ width: '1em', height: '1em' }} viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" /></svg>
      </ButtonSpan>
    </Button>
  </Container>
));

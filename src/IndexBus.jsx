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

const InformationDiv = styled.div`
  position: absolute;
  top: 140px;
  width: 270px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  left: 90px;
`;

const Informationh2 = styled.h2`
  margin: 20px 20px 0 20px;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const Informationh3 = styled.h3`
  margin: 0 20px;
  height: 38px;
  font-size: 14px;
  line-height: 1.64;
  color: #333;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Informationhr = styled.hr`
  display: block;
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;
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

}) => {
  function getTypeH2(type) {
    if (type === 0) return '유저 경험을 설계하라!';
    if (type === 1) return '개발자 성장 비결 공개!';
    if (type === 2) return '믿을 것은 데이터 뿐!';
    if (type === 3) return '리크루터 커리어 가이드';
    if (type === 4) return '해, 커리어 EP 02 공개';
    if (type === 5) return '스타벅스 굿즈 좋아하세요?';
    if (type === 6) return '아는 만큼 보인다!';
    return '22';
  }
  function getTypeH3(type) {
    if (type === 0) return '문제를 해결하는 프로덕트 디자인';
    if (type === 1) return '글 쓰는 개발자들의 이야기';
    if (type === 2) return '요즘 데이터팀은 어떻게 일할까?';
    if (type === 3) return '싼마이 리크루터가 되지 않기 위해';
    if (type === 4) return '최종 발표를 위한 마지막 관문 2라운드의 승자는?';
    if (type === 5) return '사랑받는 디자인의 비밀';
    if (type === 6) return '노동법 채용 시리즈';
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
            <Info>
              <Slide img={getTypeImg(type)} />
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
      <Button ref={rightButton} style={{ right: 'calc((100% - 920px) / 2)' }}>
        <ButtonSpan>
          <svg style={{ width: '1em', height: '1em' }} viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg>
        </ButtonSpan>
      </Button>
      <Button ref={leftButton} style={{ left: 'calc((100% - 920px) / 2' }}>
        <ButtonSpan>
          <svg style={{ width: '1em', height: '1em' }} viewBox="0 0 18 18"><path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" /></svg>
        </ButtonSpan>
      </Button>
    </Container>
  );
});

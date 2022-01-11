import React from 'react';

import styled from 'styled-components';

import logo from './images/logo.png';

const Header = styled.header`
position: fixed;
padding-right: initial ;
width: 100%;
background-color: #fff;
z-index: 100;
box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;

const NavMediaQuery = styled.div`
position: relative;
max-width: 1060px;
height: 50px;
@media (max-width: 767px){
  height: 110px;
}
@media (min-width: 768px) and (max-width: 991px){
  margin: 0 auto;
  height: 110px;
  width: 90%;
}
@media (min-width: 992px) and (max-width: 1199px){
  margin: 0 auto;
  height: 50px;
  width: 90%;
}
@media screen and (min-width: 1200px) {
    margin: 0 auto;
    height: 50px;
    width: 87.72%;
  }
`;
const MainBarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
`;

const ProfileButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  height: 32px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;
`;

const AvatarBorder = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #e1e2e3;
    background-color: #fff;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
`;
const AvatarImg = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://lh3.googleusercontent.com/a/AATXAJzhF8hjuNE-eG8wKFLfd9IyhgCfvYafFK2BleK2=s96-c);
`;

const MenuImg = styled.img`
width: 17px;
height: 14px;
object-fit: contain;
`;
const LogoImg = styled.img`
width: 78px;
height: 20px;
object-fit: contain;
`;

const MenuNameUl = styled.li`  
  list-style: none;
  height: inherit;
  text-align: center;
  margin: 0;
`;

const MenuNameLi = styled.li`  
  list-style: none;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
`;

const Aside = styled.aside`
  padding: 9px 0;
  height: 100%;
  display: block;
`;

const AsideUl = styled.ul`
  list-style: none;
  height: 100%;
  margin: 0;
  & li {
    height: 100%;
    padding: 0 5px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
  } 
  & ul li a {
    display: inline-block;
    vertical-align: bottom;
  }
`;

const AsideLi = styled.li`
  list-style: none;
  position: relative;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;
const LeftDivision = styled.div`
  display: inline-block;
  content: "";
  width: 1px;
  height: 10px;
  background-color: #e1e2e3;
  margin: auto 10px;
`;

const DashboardButton = styled.a`
  display: inline-block;
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;
`;
const Badge = styled.span`
  background-color: rgb(51, 102, 255);
  width: 13px;
  height: 13px;
  position: absolute;
  top: -8px;
  left: 25px;
  padding: 0!important;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: 16px;
  height: 16px;
  background: #36f;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 5px;
`;

export default function App() {
  return (
    <div>
      <Header>
        <NavMediaQuery>
          <MainBarNav>
            <div>
              <Button type="button">
                <MenuImg src="https://static.wanted.co.kr/images/icon-menu.png" />
              </Button>
              <LogoImg src={logo} alt="" />
            </div>
            <MenuNameUl>
              <MenuNameLi>채용</MenuNameLi>
              <MenuNameLi>이벤트</MenuNameLi>
              <MenuNameLi>직군별 연봉</MenuNameLi>
              <MenuNameLi>이력서</MenuNameLi>
              <MenuNameLi>커뮤니트</MenuNameLi>
              <MenuNameLi>프리랜서</MenuNameLi>
              <MenuNameLi>AI 합격예측</MenuNameLi>
            </MenuNameUl>
            <Aside>
              <AsideUl>
                <AsideLi>
                  <Button style={{ margintop: 'relative' }, { marginTop: '5px' }}>
                    <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <defs><path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z" /></defs>
                      <g fill="none" fillRule="evenodd"><use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a" /></g>
                    </svg>
                  </Button>
                </AsideLi>
                <AsideLi>
                  <Button style={{ margintop: 'relative' }, { marginRight: '10px' }}>
                    <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <defs><path id="bpnpn3yn0a" d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z" /></defs>
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                          <mask id="1dencd96ob" fill="#fff"><use xlinkHref="#bpnpn3yn0a" /></mask>
                          <use fillRule="nonzero" stroke="currentColor" strokeWidth=".3" xlinkHref="#bpnpn3yn0a" />
                          <g fill="currentColor" mask="url(#1dencd96ob)"><path d="M0 0H18V18H0z" /></g>
                        </g>
                      </g>
                    </svg>
                  </Button>
                </AsideLi>
                <AsideLi>
                  <ProfileButton>
                    <AvatarBorder>
                      <AvatarImg />
                    </AvatarBorder>
                    <Badge>
                      <svg className="" width="5" height="5" viewBox="0 0 6 6">
                        <g fill="#fff" fillRule="nonzero">
                          <path d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z" transform="translate(-123 -375) translate(20 365) translate(98 5)" />
                        </g>
                      </svg>
                    </Badge>
                  </ProfileButton>
                </AsideLi>
                <AsideLi>
                  <LeftDivision />
                  <DashboardButton>기업 서비스</DashboardButton>
                </AsideLi>
              </AsideUl>
            </Aside>
          </MainBarNav>
        </NavMediaQuery>
      </Header>
    </div>
  );
}

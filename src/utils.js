import img1 from './images/banner1.jpg';
import img2 from './images/banner2.jpg';
import img3 from './images/banner3.jpg';
import img4 from './images/banner4.jpg';
import img5 from './images/banner5.jpg';
import img6 from './images/banner6.jpg';
import img7 from './images/banner7.jpg';

export function getTypeH2(type) {
  if (type === 0) return '유저 경험을 설계하라!';
  if (type === 1) return '개발자 성장 비결 공개!';
  if (type === 2) return '믿을 것은 데이터 뿐!';
  if (type === 3) return '리크루터 커리어 가이드';
  if (type === 4) return '해, 커리어 EP 02 공개';
  if (type === 5) return '스타벅스 굿즈 좋아하세요?';
  if (type === 6) return '아는 만큼 보인다!';
  return '22';
}
export function getTypeH3(type) {
  if (type === 0) return '문제를 해결하는 프로덕트 디자인';
  if (type === 1) return '글 쓰는 개발자들의 이야기';
  if (type === 2) return '요즘 데이터팀은 어떻게 일할까?';
  if (type === 3) return '싼마이 리크루터가 되지 않기 위해';
  if (type === 4) return '최종 발표를 위한 마지막 관문 2라운드의 승자는?';
  if (type === 5) return '사랑받는 디자인의 비밀';
  if (type === 6) return '노동법 채용 시리즈';
  return '22';
}
export function getTypeImg(type) {
  if (type === 0) return img1;
  if (type === 1) return img2;
  if (type === 2) return img3;
  if (type === 3) return img4;
  if (type === 4) return img5;
  if (type === 5) return img6;
  if (type === 6) return img7;
  return img1;
}

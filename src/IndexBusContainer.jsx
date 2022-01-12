import React, { useEffect, useRef, useState } from 'react';
import IndexBus from './IndexBus';

export default function IndexBusContainer() {
  // const busTypes = ["shuttle","daesung","cityBus"];

  const sliderRef = useRef();
  const [mobileTypes, setMobileTypes] = useState([0, 1, 2, 3, 4, 5, 6]); // 슬라이드 설정

  useEffect(() => {
    sliderRef.current.scrollLeft = (window.innerWidth * 0.75
      - (window.innerWidth - window.innerWidth * 0.75) / 2);

    let walk;
    let startX;
    let scrollValue;

    function slideTouchStart(e) {
      startX = e.touches[0].pageX - sliderRef.current.offsetLeft; // e.touch[0]을 통해 터치된 지점 확인
      scrollValue = sliderRef.current.scrollLeft; // 터치된 순간, startX와 scrollValue값 초기화
    }

    function slideTouchEnd() {
      if (walk) {
        sliderRef.current.scrollLeft = (window.innerWidth * 0.75
          - (window.innerWidth - window.innerWidth * 0.75) / 2);
        if (walk < 0) {
          if (walk < -120) {
            setMobileTypes((state) => state.slice(1, 7).concat(state[0])); // 오름차순 1 ~ 6 범위 추가
          }
        } else if (walk > 0) {
          if (walk > 120) {
            setMobileTypes((state) => [state[6]].concat(state.slice(0, 6))); // 내림차순
          }
        }
      }
      // console.log(walk);
      walk = 0;
    }

    function slideTouchCancel() {
      if (walk) {
        sliderRef.current.scrollLeft = (window.innerWidth * 0.75
          - (window.innerWidth - window.innerWidth * 0.75) / 2);
        if (walk < 0) {
          if (walk < -120) {
            setMobileTypes((state) => state.slice(1, 7).concat(state[0]));
          }
        } else if (walk > 0) {
          if (walk > 120) {
            setMobileTypes((state) => [state[6]].concat(state.slice(0, 6)));
          }
        }
      }
      walk = 0;
    }

    function slideTouchMove(e) {
      e.preventDefault();
      walk = (e.touches[0].pageX - sliderRef.current.offsetLeft - startX) * 0.9;
      sliderRef.current.scrollLeft = scrollValue - walk;
    }

    sliderRef.current.addEventListener('touchstart', slideTouchStart);
    sliderRef.current.addEventListener('touchend', slideTouchEnd);
    sliderRef.current.addEventListener('touchmove', slideTouchMove);
    sliderRef.current.addEventListener('touchcancel', slideTouchCancel);

    return () => { if (sliderRef.current)sliderRef.current.removeEventListener('touchmove', slideTouchMove); };
  }, []);

  return (
    <IndexBus
      sliderRef={sliderRef}
      mobileTypes={mobileTypes}
    />
  );
}

import React, { useState, useEffect, useRef, useCallback } from "react";

const TextScroll = ({ yOffset, height, sceneInfo, isInViewPort }) => {
  const messageRef = useRef([]);

  useEffect(() => {
    let prevScrollHeight = 0;

    if (isInViewPort) prevScrollHeight = 0;
    else prevScrollHeight = yOffset;

    scrollLoop(prevScrollHeight);
  }, [yOffset]);

  const scrollLoop = (prevScollHeight) => {
    if (!isInViewPort) return;

    playAnimation(prevScollHeight);

    //현재 스크롤 위치보다 토탈 스크롤 위치가 커지면 break => 새로고침시에
    //let totalScrollHeight = 0;
    //for (let i = 0; i < sceneInfo.length; i++) {
    //  totalScrollHeight += sceneInfo[i].scrollHeight;
    //  if (totalScrollHeight >= yOffset) {
    //    setCurScene(i);
    //    break;
    //  }
    //}
  };

  const calcValues = (values, curYOffset) => {
    let rv;
    //현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
    const scrollHeight = height;
    let scrollRatio = isNaN(curYOffset / height) ? 0 : curYOffset / height;

    if (values.length === 3) {
      // start ~ end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (curYOffset >= partScrollStart && curYOffset <= partScrollEnd) {
        rv =
          ((curYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (curYOffset < partScrollStart) {
        rv = values[0];
      } else if (curYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
  };

  const playAnimation = (prevScollHeight) => {
    const values = sceneInfo.values;
    const curYOffset = yOffset - prevScollHeight;
    const scrollHeight = height;
    const scrollRatio = curYOffset / scrollHeight;

    if (scrollRatio <= 0.22) {
      messageRef.current[0].style.opacity = calcValues(
        values.messageA_opacity_in,
        curYOffset
      );

      messageRef.current[0].transform = `translateY(${calcValues(
        values.messageA_translateY_in,
        curYOffset
      )}%)`;
    } else {
      messageRef.current[0].style.opacity = calcValues(
        values.messageA_opacity_out,
        curYOffset
      );

      messageRef.current[0].style.transform = `translateY(${calcValues(
        values.messageA_translateY_out,
        curYOffset
      )}%)`;
    }

    if (scrollRatio <= 0.42) {
      // in
      messageRef.current[1].style.opacity = calcValues(
        values.messageB_opacity_in,
        curYOffset
      );
      messageRef.current[1].style.transform = `translate3d(0, ${calcValues(
        values.messageB_translateY_in,
        curYOffset
      )}%, 0)`;
    } else {
      // out
      messageRef.current[1].style.opacity = calcValues(
        values.messageB_opacity_out,
        curYOffset
      );
      messageRef.current[1].style.transform = `translate3d(0, ${calcValues(
        values.messageB_translateY_out,
        curYOffset
      )}%, 0)`;
    }

    if (scrollRatio <= 0.62) {
      // in
      messageRef.current[2].style.opacity = calcValues(
        values.messageC_opacity_in,
        curYOffset
      );
      messageRef.current[2].style.transform = `translate3d(0, ${calcValues(
        values.messageC_translateY_in,
        curYOffset
      )}%, 0)`;
    } else {
      // out
      messageRef.current[2].style.opacity = calcValues(
        values.messageC_opacity_out,
        curYOffset
      );
      messageRef.current[2].style.transform = `translate3d(0, ${calcValues(
        values.messageC_translateY_out,
        curYOffset
      )}%, 0)`;
    }

    if (scrollRatio <= 0.82) {
      // in
      messageRef.current[3].style.opacity = calcValues(
        values.messageD_opacity_in,
        curYOffset
      );
      messageRef.current[3].style.transform = `translate3d(0, ${calcValues(
        values.messageD_translateY_in,
        curYOffset
      )}%, 0)`;
    } else {
      // out
      messageRef.current[3].style.opacity = calcValues(
        values.messageD_opacity_out,
        curYOffset
      );
      messageRef.current[3].style.transform = `translate3d(0, ${calcValues(
        values.messageD_translateY_out,
        curYOffset
      )}%, 0)`;
    }
  };

  return (
    <>
      <div
        className="sticky-elem main-message main-message-a"
        ref={(el) => (messageRef.current[0] = el)}
      >
        <p>
          ACTUALLY, I'M A WEBSITE
          <br />I WAS BUILT BY HYEJIN HWANG
        </p>
      </div>
      <div
        className="sticky-elem main-message main-message-b"
        ref={(el) => (messageRef.current[1] = el)}
      >
        <p>HyeJin Hwang</p>
      </div>
      <div
        className="sticky-elem main-message main-message-c"
        ref={(el) => (messageRef.current[2] = el)}
      >
        <p>
          FRONTEND
          <br />
          DEVELOPER
        </p>
      </div>
      <div
        className="sticky-elem main-message main-message-d"
        ref={(el) => (messageRef.current[3] = el)}
      >
        <p>WEB DEVELOPER</p>
      </div>
    </>
  );
};

export default TextScroll;

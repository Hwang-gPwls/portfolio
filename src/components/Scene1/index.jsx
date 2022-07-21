import React, { useState, useRef, useEffect, useCallback } from "react";
import useScroll from "../../hooks/useScroll";

import { sceneInfo } from "../../public/data";
import CheckIsInViewPort from "../../utils/CheckIsInViewPort";
import Home from "./Home";
import TextScroll from "./TextScroll";

const Scene1 = () => {
  const [height, setHeight] = useState(5 * window.innerHeight);
  const [isInViewPort, setIsInViewPort] = useState(null);
  const [yOffset, setYOffset] = useState(0);
  const sectionRef = useRef(null);

  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);

  const onScroll = useCallback(() => {
    setYOffset(window.pageYOffset);
    setIsInViewPort(CheckIsInViewPort(sectionRef.current));
  });

  useScroll(onScroll);

  //load 이벤트 수정
  useEffect(() => {
    const handleResize = () => {
      setWindowHeightSize(window.innerHeight);
    };

    setHeight(windowHeightSize * 5);
    setLayout();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeightSize]);

  const setLayout = () => {
    sectionRef.current.style.height = `${height}px`;
  };

  return (
    <div ref={(el) => (sectionRef.current = el)}>
      <Home />
      <TextScroll
        yOffset={yOffset}
        height={height}
        sceneInfo={sceneInfo}
        isInViewPort={isInViewPort}
      />
    </div>
  );
};

export default Scene1;

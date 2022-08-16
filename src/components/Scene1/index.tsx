import { useState, useRef, useCallback } from "react";
import { sceneInfo } from "../../public/data";

import styled from "styled-components";
import useResize from "../../hooks/useResize";
import useScroll from "../../hooks/useScroll";
import CheckIsInViewPort from "../../utils/CheckIsInViewPort";

import Home from "./Home";
import TextScroll from "./TextScroll";
import React from "react";

const Scene1 = () => {
  const [height, setHeight] = useState(5.5 * window.innerHeight);
  const [isInViewPort, setIsInViewPort] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const sectionRef = useRef<null | HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    setYOffset(window.pageYOffset);
    setIsInViewPort(CheckIsInViewPort(sectionRef.current));
  }, [window.pageYOffset, sectionRef.current]);

  const handleResize = () => {
    setHeight(5.5 * window.innerHeight);
  };

  useScroll(onScroll);
  useResize(handleResize);

  return (
    <Container ref={(el) => (sectionRef.current = el)} height={height}>
      <Home />
      <TextScroll
        yOffset={yOffset}
        height={height}
        sceneInfo={sceneInfo}
        isInViewPort={isInViewPort}
      />
    </Container>
  );
};

const Container = styled.div<{ height: number }>`
  width: 100%;
  height: "${({ height }) => `${height}px`}";
  margin-top: 3vh;
`;

export default Scene1;

import React, { useState, useRef, useEffect, useCallback } from "react";
import { sceneInfo } from "../../public/data";
import styled from "styled-components";
import useResize from "../../hooks/useResize";
import useScroll from "../../hooks/useScroll";
import CheckIsInViewPort from "../../utils/CheckIsInViewPort";
import Home from "./Home";
import TextScroll from "./TextScroll";

const Scene1 = () => {
  const [height, setHeight] = useState(5.5 * window.innerHeight);
  const [isInViewPort, setIsInViewPort] = useState(null);
  const [yOffset, setYOffset] = useState(0);
  const sectionRef = useRef(null);

  const onScroll = useCallback(() => {
    setYOffset(window.pageYOffset);
    setIsInViewPort(CheckIsInViewPort(sectionRef.current));
  });

  const handleResize = () => {
    setHeight(5.5 * window.innerHeight);
  };

  useScroll(onScroll);
  useResize(handleResize);

  useEffect(() => {
    sectionRef.current.style.height = `${height}px`;
  }, [height]);

  return (
    <Container ref={(el) => (sectionRef.current = el)}>
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

const Container = styled.div`
  width: 100%;
  margin-top: 3vh;
`;

export default Scene1;

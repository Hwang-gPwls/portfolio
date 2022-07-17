import React, { useEffect, useRef, useState } from "react";
import useScroll from "../hooks/useScroll";
import CheckIsInViewPort from "../hooks/CheckIsInViewPort";

const ScrollTextAnimation = (children) => {
  debugger;
  //const elemRef = useRef(children.current);
  const [isViewPort, etIsViewPort] = useState(
    CheckIsInViewPort(children.current)
  );
  //   const [yOffset, setYOffset] = useState(0);

  //   const onScroll = useCallback(() => {
  //     setYOffset(window.pageYOffset);
  //   });

  //   useScroll(onScroll);

  //return <div ref={elemRef}>{children}</div>;

  console.log(isViewPort);
  return <></>;
};

export default ScrollTextAnimation;

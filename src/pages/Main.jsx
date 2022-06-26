import React from "react";
import { useCallback, useState, useEffect, useRef, useScroll } from "react";

import AOS from "aos";
import Home from "../components/home/Home";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Strength from "../components/strength/Strength";
import Projects from "../components/projects/Projects";
import "aos/dist/aos.css";
import "../main.css";

useScroll = () => {
  // 스크롤 X, Y 좌표를 객체로 저장
  const [yOffset, setYOffset] = useState(0);

  const onScroll = () => {
    setYOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return yOffset;
};

const Main = () => {
  const sectionRef = useRef([]);
  const messageRef = useRef([]);
  const divRef = useRef(null);

  const yOffset = useScroll();
  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);

  const [curScene, setCurScene] = useState(0);
  const [sceneInfo, setSceneInfo] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const setValue = useCallback(() => {
    setSceneInfo(() => [
      {
        //0
        id: 0,
        type: "sticky",
        heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
        scrollHeight: 0,
        objs: {
          container: sectionRef.current[0],
          messageA: messageRef.current[0],
          messageB: messageRef.current[1],
          messageC: messageRef.current[2],
          messageD: messageRef.current[3],
        },
        values: {
          messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
          messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],

          messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
          messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
          messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],

          messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
          messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
          messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.9 }],

          messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
          messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
          messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
          messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
        },
      },
      {
        //1
        id: 1,
        type: "normal",
        scrollHeight: 0,
        objs: {
          container: sectionRef.current[1],
        },
      },
      {
        //2
        id: 2,
        type: "normal",
        scrollHeight: 0,
        objs: {
          container: sectionRef.current[2],
        },
      },
      {
        //3
        id: 3,
        type: "normal",
        scrollHeight: 0,
        objs: {
          container: sectionRef.current[3],
        },
      },
    ]);
  }, [sceneInfo]);

  //load 이벤트 수정
  useEffect(() => {
    if (sceneInfo.length < 1) {
      window.addEventListener("load", () => {});
      return () => {
        window.removeEventListener("load", () => {});
      };
    }

    const handleResize = () => {
      setWindowHeightSize(window.innerHeight);
    };

    setLayout();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeightSize, sceneInfo]);

  useEffect(() => {
    if (sceneInfo.length < 1) {
      setValue();
    } else {
      let prevScrollHeight = 0;

      for (let i = 0; i < curScene; i++) {
        prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
      }

      scrollLoop(prevScrollHeight);
    }
  }, [yOffset, setValue]);

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 셋팅

    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === "sticky") {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHright;
      } else if (sceneInfo[i].type === "normal") {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
      }

      sceneInfo[i] = {
        ...sceneInfo[i],
        scrollHeight: sceneInfo[i].heightNum * windowHeightSize,
      };

      sectionRef.current[i].style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    //현재 스크롤 위치보다 토탈 스크롤 위치가 커지면 break => 새로고침시에
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        setCurScene(i);
        break;
      }
    }
  };

  const scrollLoop = (prevScollHeight) => {
    let enterNewScene = false;

    if (yOffset > prevScollHeight + sceneInfo[curScene].scrollHeight) {
      enterNewScene = true;
      setCurScene(curScene + 1);
      //sectionbodyRef.current.setAttribute("id", `show-scene-${curScene}`);
    }

    if (yOffset < prevScollHeight) {
      enterNewScene = true;
      if (curScene === 0) return; //브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
      setCurScene(curScene - 1);
      //sectionbodyRef.current.setAttribute("id", `show-scene-${curScene}`);
    }

    if (enterNewScene) return;

    playAnimation(prevScollHeight);
  };

  const calcValues = (values, curYOffset) => {
    let rv;
    //현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
    const scrollHeight = sceneInfo[curScene].scrollHeight;
    let scrollRatio = isNaN(curYOffset / sceneInfo[curScene].scrollHeight)
      ? 0
      : curYOffset / sceneInfo[curScene].scrollHeight;

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
    const objs = sceneInfo[curScene].objs;
    const values = sceneInfo[curScene].values;
    const curYOffset = yOffset - prevScollHeight;
    const scrollHeight = sceneInfo[curScene].scrollHeight;
    const scrollRatio = curYOffset / scrollHeight;

    switch (curScene) {
      case 0:
        if (scrollRatio <= 0.22) {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            curYOffset
          );

          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_in,
            curYOffset
          )}%)`;
        } else {
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            curYOffset
          );

          objs.messageA.style.transform = `translateY(${calcValues(
            values.messageA_translateY_out,
            curYOffset
          )}%)`;
        }

        if (scrollRatio <= 0.42) {
          // in
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            curYOffset
          );
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            curYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            curYOffset
          );
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            curYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.62) {
          // in
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            curYOffset
          );
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            curYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            curYOffset
          );
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            curYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.82) {
          // in
          objs.messageD.style.opacity = calcValues(
            values.messageD_opacity_in,
            curYOffset
          );
          objs.messageD.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_in,
            curYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageD.style.opacity = calcValues(
            values.messageD_opacity_out,
            curYOffset
          );
          objs.messageD.style.transform = `translate3d(0, ${calcValues(
            values.messageD_translateY_out,
            curYOffset
          )}%, 0)`;
        }
        break;

      case 2:
        if (scrollRatio <= 0.5) {
          // in
          objs.canvas.style.opacity = calcValues(
            values.canvas_opacity_in,
            curYOffset
          );
        } else {
          // out
          objs.canvas.style.opacity = calcValues(
            values.canvas_opacity_out,
            curYOffset
          );
        }

        if (scrollRatio <= 0.25) {
          // in
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_in,
            curYOffset
          );
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_in,
            curYOffset
          )}%, 0)`;
        } else {
          // out
          objs.messageA.style.opacity = calcValues(
            values.messageA_opacity_out,
            curYOffset
          );
          objs.messageA.style.transform = `translate3d(0, ${calcValues(
            values.messageA_translateY_out,
            curYOffset
          )}%, 0)`;
        }

        if (scrollRatio <= 0.57) {
          // in
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_in,
            curYOffset
          )}%, 0)`;
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_in,
            curYOffset
          );
          objs.pinB.style.transform = `scaleY(${calcValues(
            values.pinB_scaleY,
            curYOffset
          )})`;
        } else {
          // out
          objs.messageB.style.transform = `translate3d(0, ${calcValues(
            values.messageB_translateY_out,
            curYOffset
          )}%, 0)`;
          objs.messageB.style.opacity = calcValues(
            values.messageB_opacity_out,
            curYOffset
          );
          objs.pinB.style.transform = `scaleY(${calcValues(
            values.pinB_scaleY,
            curYOffset
          )})`;
        }

        if (scrollRatio <= 0.83) {
          // in
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_in,
            curYOffset
          )}%, 0)`;
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_in,
            curYOffset
          );
          objs.pinC.style.transform = `scaleY(${calcValues(
            values.pinC_scaleY,
            curYOffset
          )})`;
        } else {
          // out
          objs.messageC.style.transform = `translate3d(0, ${calcValues(
            values.messageC_translateY_out,
            curYOffset
          )}%, 0)`;
          objs.messageC.style.opacity = calcValues(
            values.messageC_opacity_out,
            curYOffset
          );
          objs.pinC.style.transform = `scaleY(${calcValues(
            values.pinC_scaleY,
            curYOffset
          )})`;
        }
        break;
      case 3:
        break;
    }
  };

  return (
    <div
      id="body"
      className="before-load"
      ref={divRef}
      onLoad={() => {
        document
          .getElementsByClassName("before-load")
          .className.remove("before-load");
      }}
    >
      <div id={`show-scene-${curScene}`}>
        {/* <div className="loading">
          <svg className="loading-circle">
            <circle cx="50%" cy="50%" r="25"></circle>
          </svg>
        </div> */}
        <div className="container">
          <Header />

          <section
            className="scroll-section"
            id="scroll-section-0"
            ref={(el) => (sectionRef.current[0] = el)}
          >
            <Home ref={messageRef} />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-1"
            ref={(el) => (sectionRef.current[1] = el)}
          >
            <About />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-2"
            ref={(el) => (sectionRef.current[2] = el)}
          >
            <Strength />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-3"
            ref={(el) => (sectionRef.current[3] = el)}
          >
            <Projects />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;

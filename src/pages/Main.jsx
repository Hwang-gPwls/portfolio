import React from "react";
import { useCallback, useState, useEffect, useRef, useScroll } from "react";
import { configurestore } from 'redux';
import { Provider, useSelector, useDispatch, connect} from 'react-redux';
import Header from "../components/header/Header";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";
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
  const sectionRef = useRef(null);
  const messageRef = useRef([]);

  const yOffset = useScroll();
  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);

  const [isScene1, setIsScene1] = useState(true);
  const [sceneInfo, setSceneInfo] = useState([]);

  const setValue = useCallback(() => {
    setSceneInfo(() => [
      {
        //0
        id: 0,
        type: "sticky",
        heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
        scrollHeight: 0,
        objs: {
          container: sectionRef.current,
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

      if(yOffset > sceneInfo[0].scrollHeight){
        prevScrollHeight = yOffset;
      }else {
        prevScrollHeight = 0;
      }

      scrollLoop(prevScrollHeight);
    }
  }, [yOffset, setValue]);

  const setLayout = () => {
      sceneInfo[0].scrollHeight = sceneInfo[0].heightNum * window.innerHright;
    
      sceneInfo[0] = {
        ...sceneInfo[0],
        scrollHeight: sceneInfo[0].heightNum * windowHeightSize,
      };

      sectionRef.current.style.height = `${sceneInfo[0].scrollHeight}px`;

    let totalScrollHeight = sceneInfo[0].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        setIsScene1(true);
      }
  };

  const scrollLoop = (prevScollHeight) => {
    if(yOffset < prevScollHeight + sceneInfo[0].scrollHeight){
      setIsScene1(true);
    } else {
      setIsScene1(false);
    }

    if(!isScene1) return;

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
    const scrollHeight = sceneInfo[0].scrollHeight;
    let scrollRatio = isNaN(curYOffset / sceneInfo[0].scrollHeight)
      ? 0
      : curYOffset / sceneInfo[0].scrollHeight;

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
    const objs = sceneInfo[0].objs;
    const values = sceneInfo[0].values;
    const curYOffset = yOffset - prevScollHeight;
    const scrollHeight = sceneInfo[0].scrollHeight;
    const scrollRatio = curYOffset / scrollHeight;

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
  };

  return (
    <div
      id="body"
      className="before-load"
      onLoad={() => {
        document
          .getElementsByClassName("before-load")
          .className.remove("before-load");
      }}
    >
      <div id="show-scene-0">
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
            ref={(el) => (sectionRef.current = el)}
          >
            <Scene1 ref={messageRef} />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-1"
          >
            <Scene2 />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-2"
          >
            <Scene3 />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-3"
          >
            <Scene4 />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
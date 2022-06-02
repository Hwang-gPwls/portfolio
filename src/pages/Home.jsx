import React from "react";
import { useCallback, useState, useEffect, useRef, useScroll } from "react";
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

const Home = () => {
  const sectionRef = useRef([]);
  const messageRef = useRef([]);
  const divRef = useRef(null);

  const yOffset = useScroll();
  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);

  //const [prevScollHeight, setPrevScollHeight] = useState(0);
  const [curScene, setCurScene] = useState(0);
  let enterNewScene = false; //새로운 scene이 시작된 순간 true

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
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-2"),
          messageA: document.querySelector("#scroll-section-2 .a"),
          messageB: document.querySelector("#scroll-section-2 .b"),
          messageC: document.querySelector("#scroll-section-2 .c"),
          pinB: document.querySelector("#scroll-section-2 .b .pin"),
          pinC: document.querySelector("#scroll-section-2 .c .pin"),
        },
        values: {
          messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
          messageB_translateY_in: [30, 0, { start: 0.5, end: 0.55 }],
          messageC_translateY_in: [30, 0, { start: 0.72, end: 0.77 }],
          messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
          messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
          messageC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
          messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
          messageB_translateY_out: [0, -20, { start: 0.58, end: 0.63 }],
          messageC_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
          messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
          messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
          messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
          pinB_scaleY: [0.5, 1, { start: 0.5, end: 0.55 }],
          pinC_scaleY: [0.5, 1, { start: 0.72, end: 0.77 }],
          pinB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
          pinC_opacity_in: [0, 1, { start: 0.72, end: 0.77 }],
          pinB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
          pinC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
        },
      },
      {
        //3
        id: 3,
        type: "sticky",
        heightNum: 5,
        scrollHeight: 0,
      },
    ]);
  }, [sceneInfo]);

  //load 이벤트 수정
  useEffect(() => {
    if (sceneInfo.length < 1) {
      window.addEventListener("load", () => {
        console.log("로드징");
      });
      return () => {
        window.removeEventListener("load", () => {});
      };

      document
        .querySelector(".loading")
        .addEventListener("transitionend", (e) => {
          document.body.removeChild(e.current);
        });
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
          <nav className="global-nav">
            <div className="global-nav-links">
              <a href="#" className="global-nav-item">
                Home
              </a>
              <a href="#" className="global-nav-item">
                About
              </a>
              <a href="#" className="global-nav-item">
                Projects
              </a>
              <a href="#" className="global-nav-item">
                Contact
              </a>
            </div>
          </nav>

          <section
            className="scroll-section"
            id="scroll-section-0"
            ref={(el) => (sectionRef.current[0] = el)}
            //height={`${sceneInfo[0].scrollHeight}px`}
          >
            <div className="section-0-frame">
              <h1>HI, I'M HYEJIN HWANG</h1>
            </div>
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
                온종일 편안한 <br />
                맞춤형 손잡이
              </p>
            </div>
            <div
              className="sticky-elem main-message main-message-d"
              ref={(el) => (messageRef.current[3] = el)}
            >
              <p>새롭게 입가를 찾아온 매혹</p>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-1"
            ref={(el) => (sectionRef.current[1] = el)}
            //height={`${sceneInfo[1].scrollHeight}px`}
          >
            <div className="description">
              <div id="flip">
                <div>
                  <div>HyeJin Hwang</div>
                </div>
                <div>
                  <div>Frontend Developer</div>
                </div>
                <div>
                  <div>Backend Developer</div>
                </div>
              </div>

              <p className="sub">
                지속적으로 좋은 방법을 생각하고, 발전하는 개발자 황혜진 입니다.
              </p>

              <p>
                사람들에게 편의와 긍정적인 영향을 줄 수 있는 좋은 서비스를
                개발하고 발전시키는 데에 관심이 많습니다. 주로 웹 서비스
                개발을 담당하였으며 회사에서 자체적으로
                개발한 프레임워크인 Qrame 기능 확장 및 유지보수에 참여하여
                해당 프레임워크를 고도화하고 다른 프로젝트에 접목해 사용한
                경험이 있습니다.
              </p>

              <p>
                기획부터 개발, 운영까지 프로젝트 전반적인 과정에 참여하고 경험을
                쌓고 있으며, 개발 완료로 끝나는 것이 아닌, 지속할 수 있는 개발을
                지향합니다. 건강한 협업 문화를 만드는 일을
                좋아합니다. 스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀
                구성원들과 위클리 회의 문화를 제안해 개발 상황과 이슈에 대한
                원활한 소통문화를 만들어 나간 경험이 있습니다.
              </p>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-2"
            ref={(el) => (sectionRef.current[2] = el)}
            //height={`${sceneInfo[2].scrollHeight}px`}
          >
            <div className="sticky-elem main-message">
              <p>
                <small>편안한 촉감</small>
                skills
              </p>
            </div>
            <div className="sticky-elem desc-messae">
              <p>
                ## Frontend - HTML, CSS, JS(ES6) - Qrame - React - Visual Studio
                Code, Visual Studio ## **Backend** - .Net Core - Qrame ## Devops
                - MySQL, SQL Server - Git
              </p>
              <div className="pin"></div>
            </div>
            <div className="sticky-elem desc-messae">
              <p>디자인 앤 퀄리티 오브 스웨덴, 메이드 인 차이나</p>
              <div className="pin"></div>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-3"
            ref={(el) => (sectionRef.current[3] = el)}
            //height={`${sceneInfo[3].scrollHeight}px`}
          >
            <p className="mid-message">
              <strong>in my career</strong>
              <br />
              아이디어를 광활하게 펼칠
              <br />
              아름답고 부드러운 음료 공간
            </p>
            <p className="canvas-caption">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque quibusdam aspernatur ratione eos ipsam quasi explicabo
              sunt, labore dolorum recusandae odit, mollitia odio. Perspiciatis
              rem eaque rerum et blanditiis porro! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Doloremque quibusdam aspernatur
              ratione eos ipsam quasi explicabo sunt, labore dolorum recusandae
              odit, mollitia odio. Perspiciatis rem eaque rerum et blanditiis
              porro! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque quibusdam aspernatur ratione eos ipsam quasi explicabo
              sunt, labore dolorum recusandae odit, mollitia odio. Perspiciatis
              rem eaque rerum et blanditiis porro!
            </p>
          </section>

          <footer className="footer">by Hyejin</footer>
        </div>
      </div>
    </div>
  );
};

export default Home;

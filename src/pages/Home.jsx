import React from "react";
import { useCallback, useState, useEffect, useRef, useScroll } from "react";
import AOS from "aos";
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

  useEffect(() => {
    AOS.init();
  });

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
        <div className="bg"></div>
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
              <h1 className="title">HI, I'M HYEJIN HWANG</h1>
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
          </section>

          <section
            className="scroll-section"
            id="scroll-section-1"
            ref={(el) => (sectionRef.current[1] = el)}
            //height={`${sceneInfo[1].scrollHeight}px`}
          >
            <div className="section-0-frame">
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
                  지속적으로 좋은 방법을 생각하고, 발전하는 개발자 황혜진
                  입니다.
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
                  기획부터 개발, 운영까지 프로젝트 전반적인 과정에 참여하고
                  경험을 쌓고 있으며, 개발 완료로 끝나는 것이 아닌, 지속할 수
                  있는 개발을 지향합니다. 건강한 협업 문화를 만드는 일을
                  좋아합니다. 스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀
                  구성원들과 위클리 회의 문화를 제안해 개발 상황과 이슈에 대한
                  원활한 소통문화를 만들어 나간 경험이 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-2"
            ref={(el) => (sectionRef.current[2] = el)}
            //height={`${sceneInfo[2].scrollHeight}px`}
          >
            <div className="section-0-frame grid-paper">
              <div className="description">
                <h2 className="title shadow">
                  Strength.
                  <div className="pin"></div>
                </h2>
              </div>
            </div>
            <div className="section-0-frame">
              <div className="description">
                <div className="skill">
                  <h1>React</h1>
                  <div className="skill-content">
                    ToyProject 일기장을 개발 했습니다.
                    <br />
                    Portfolio 프로젝트를 개발 했습니다.
                    <br />
                    공식문서 및 강의를 통한 체계적인 학습을 했습니다.
                  </div>
                </div>
                <div className="skill">
                  <h1>HTML/CSS</h1>
                  <div className="skill-content">
                    HTNL5 기본 문법을 준수하고 웹표준을 지키려고 노력 합니다.
                    <br />
                    웹페이지에 사용할 컨트롤 오픈소스 및 CSS 라이브러리를
                    사용하여 개발할 수 있습니다.
                    <br />
                    크로스 브라우징에 대응할 수 있습니다.
                  </div>
                </div>
                <div className="skill">
                  <h1>Javascript</h1>
                  <div className="skill-content">
                    ES6+ 문법에 익숙합니다.
                    <br />
                    webpack등의 번들러 사용경험이 있습니다.
                    <br />
                    VanillaJS를 이용해 웹페이지를 개발할 수 있습니다.
                  </div>
                </div>
                <div className="skill">
                  <h1>Qrame</h1>
                  <div className="skill-content">
                    사내 프레임워크로 ES6+를 고도화 한 함수 및 기능등을
                    제공합니다.
                    <br />
                    프론트엔드 개발에 필요한 컨트롤 고도화 및 함수 고도화에 참여
                    하였습니다.
                    <br />
                    컨트롤 성능 최적화 경험이 있습니다.
                    <br />
                    Qrame을 이용하여 ERP솔루션 및 관리자 페이지 개발 경험이
                    있습니다.
                  </div>
                </div>
                <div className="skill">
                  <h1>.Net Core</h1>
                  <div className="skill-content">
                    .Net Core를 이용한 API 개발 경험이 있습니다.
                  </div>
                </div>
                <div className="skill">
                  <h1>MySQL</h1>
                  <div className="skill-content">
                    스키마 설계 및 ERD작성 경험이 있습니다.
                    <br />
                    MySQL 문법을 준수하여 SQL을 작성 합니다.
                    <br />
                    서버리스 프로젝트의 쿼리를 담당하여, 백엔드에서 처리해야 할
                    기능을 쿼리를 통해 구현한 경험이 있습니다.
                    <br />
                    쿼리 성능 튜닝 경험이 있습니다.
                  </div>
                </div>
                <div className="skill">
                  <h1>SQL Server</h1>
                  SQL Server 문법을 준수하여 SQL을 작성 합니다.
                </div>
                <div className="skill">
                  <h1>Git / SVN</h1>
                  <div className="skill-content">
                    형상관리 툴을 사용해 협업을 해 왔습니다.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-3"
            ref={(el) => (sectionRef.current[3] = el)}
            //height={`${sceneInfo[3].scrollHeight}px`}
          >
            <div className="section-0-frame">
              <p className="stripe">in my career</p>
            </div>
            <div className="careerContents">
              <div className="box-wrapper">
                <div id="box" data-aos="fade-down-right">
                  <h1 className="heading">Mojito 쇼핑몰 솔루션 개발</h1>
                  <div className="data">
                    <span className="date">2021-10-21</span>
                  </div>
                  <p className="texts">
                    ASP .Net Core를 이용한 웹페이지 개발
                    <br />
                    모듈화를 통해 요구사항별로 필요한 화면만을 사용할 수 있도록
                    개발
                    <br />
                    서버와의 연동을 위한 API개발 및 쿼리 작성
                  </p>
                </div>
              </div>
              <div id="box" data-aos="fade-down-left">
                <h1 className="heading">EasyWork ERP 프로그램 개발</h1>
                <div className="data">
                  <span className="date">2021-10-21</span>
                </div>
                <p className="texts">
                  ERP 프로그램 스키마 설계 및 쿼리 작성
                  <br />
                  기획 / 설계 단계부터 참여
                  <br />
                  사내 프레임워크인 Qrame을 사용한 화면 개발
                  <br />
                  Qrame 컨트롤 이슈 파악 및 기능 개선
                </p>
              </div>
              <div className="box-wrapper">
                <div id="box" data-aos="fade-down-right">
                  <h1 className="heading">
                    윤선생 Wooyoung(우리동네 영어교실) 개발 및 운영
                  </h1>
                  <div className="data">
                    <span className="date">2021-10-21</span>
                  </div>
                  <p className="texts">
                    회원, 지점관리 및 교재 주문 서비스 개선을 위한 관리자 웹
                    페이지 개발 및 운영
                    <br />
                    Qrame 오픈소스 오류 개선 및 컴포넌트 고도화
                    <br />
                    사내 프레임워크인 Qrame을 사용한 화면 개발
                  </p>
                </div>
              </div>
              <div id="box" data-aos="fade-down-left">
                <h1 className="heading">
                  Collabic (생산자 구매자 섬유산업 서비스 플랫폼)
                </h1>
                <div className="data">
                  <span className="date">2021-10-21</span>
                </div>
                <p className="texts">
                  원단 판매 사업의 판매 프로세스 개선을 위한 원단 추천 AI
                  프로젝트
                  <br />
                  vue.js를 사용하여 AI기반 구매자 추천 소재 제안 알고리즘 시현을
                  위한 데모 화면 개발
                  <br />
                  사내 프레임워크인 Qrame을 사용한 AI Admin 페이지 개발
                  <br />
                  ML.NET을 이용한 AI 테스트용 API 개발
                </p>
              </div>
            </div>
          </section>

          <footer className="footer">by Hyejin</footer>
        </div>
      </div>
    </div>
  );
};

export default Home;

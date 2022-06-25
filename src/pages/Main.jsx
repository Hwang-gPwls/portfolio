import React from "react";
import { useCallback, useState, useEffect, useRef, useScroll } from "react";
import { Power2, TimelineLite } from "gsap";
import AOS from "aos";
import Home from "../components/home/Home";
import "aos/dist/aos.css";
import "../main.css";

const menuItems = [
  {
    key: "home",
    title: "Home",
    link: "scroll-section-0",
  },
  {
    key: "about",
    title: "About",
    link: "scroll-section-1",
  },
  {
    key: "strenth",
    title: "Strength",
    link: "scroll-section-2",
  },
  {
    key: "projects",
    title: "Projects",
    link: "scroll-section-3",
  },
];

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
  const strengthRef = useRef(null);

  const yOffset = useScroll();
  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);

  const [curScene, setCurScene] = useState(0);
  const [sceneInfo, setSceneInfo] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  const onMouseOver = (e) => {
    if (e.target.className === "contact-circle") {
      let tl = new TimelineLite();
      tl.to(e.target, 1, { yPercent: -40, ease: Power2.easeInOut });
      tl.to(e.target, 1, { yPercent: 0, ease: Power2.easeInOut });
    }

    if (String(e.target.tagName).toLocaleLowerCase() === "h1") {
      if (e.target.id === "react") {
        strengthRef.current.innerText = `ToyProject 일기장을 개발 했습니다.
        Portfolio 프로젝트를 개발 했습니다.
        공식문서 및 강의를 통한 체계적인 학습을 했습니다.`;
      } else if (e.target.id === "html") {
        strengthRef.current.innerText = ` HTML5 기본 문법을 준수하고 웹표준을 지키려고 노력 합니다.
        웹페이지에 사용할 컨트롤 오픈소스 및 CSS 라이브러리를 사용하여 개발할 수 있습니다.
        크로스 브라우징에 대응할 수 있습니다.`;
      } else if (e.target.id === "javascript") {
        strengthRef.current.innerText = ` ES6+ 문법에 익숙합니다.
        회사 내 자체 프레임워크 개발에 참여해 ES6+ 함수를 고도화 하여 적용시킨 경험이 있습니다.
        webpack등의 번들러 사용경험이 있습니다.
        VanillaJS를 이용해 웹페이지를 개발할 수 있습니다.`;
      } else if (e.target.id === "qrame") {
        strengthRef.current.innerText = `사내 프레임워크로 ES6+를 고도화 한 함수 및 기능등을 제공합니다.
        프론트엔드 개발에 필요한 컨트롤 고도화 및 함수 고도화에 참여 하였습니다.
        다양한 오픈소스를 활용하고, 접목시킨 경험이 있습니다.
        컨트롤 성능 최적화 경험이 있습니다.
        Qrame을 이용하여 ERP솔루션 및 관리자 페이지 개발 경험이 있습니다.`;
      } else if (e.target.id === "net") {
        strengthRef.current.innerText = `.Net Core를 이용한 API 개발 경험이 있습니다.
        `;
      } else if (e.target.id === "mysql") {
        strengthRef.current.innerText = `스키마 설계 및 ERD작성 경험이 있습니다.
        MySQL 문법을 준수하여 SQL을 작성 합니다.
        서버리스 프로젝트의 쿼리를 담당하여, 백엔드에서 처리해야 할 기능을 쿼리를 통해 구현한 경험이 있습니다.
        쿼리 성능 튜닝 경험이 있습니다.`;
      } else if (e.target.id === "sql") {
        strengthRef.current.innerText = `
        SQL Server 문법을 준수하여 SQL을 작성 합니다.`;
      }

      let tl = new TimelineLite();
      tl.to(e.target, 1, { yPercent: -40, ease: Power2.easeInOut });
      tl.to(e.target, 1, { yPercent: 0, ease: Power2.easeInOut });
    }
  };

  const moveLocation = (e) => {
    if (e.target.id === "github") {
      window.open("https://github.com/Hwang-gPwls");
    }

    if (e.target.id === "contact") {
    }
  };

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
          <div className="global-nav">
            <div className="global-nav-links">
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.link}`}
                  className="global-nav-item"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <section
            className="scroll-section"
            id="scroll-section-0"
            ref={(el) => (sectionRef.current[0] = el)}
            //height={`${sceneInfo[0].scrollHeight}px`}
          >
            <Home ref={messageRef} />
          </section>

          <section
            className="scroll-section"
            id="scroll-section-1"
            ref={(el) => (sectionRef.current[1] = el)}
            //height={`${sceneInfo[1].scrollHeight}px`}
          >
            <div className="section-0-frame">
              <div className="wrapper-description">
                <div className="description">
                  <div id="flip">
                    <div>
                      <div>HyeJin Hwang</div>
                    </div>
                    <div>
                      <div>Javascript</div>
                    </div>
                    <div>
                      <div>Html/Css</div>
                    </div>
                  </div>
                  <div className="pin"></div>
                  <div className="wrapper-sub">
                    <div className="sub">
                      경험을 통해 성장하고, 새로운 도전을 두려워 하지 않는
                      개발자 황혜진 입니다.
                    </div>
                    <p>
                      사람들에게 편의와 긍정적인 영향을 줄 수 있는 좋은 서비스를
                      개발하고 발전시키는 데에 관심이 많습니다
                      <br />
                      주로 웹 서비스 개발을 담당하였으며,
                      <br />
                      회사에서 자체적으로 개발한 프레임워크인 Qrame 기능 확장 및
                      유지보수에 참여하여 해당 
                      <span className="hightlight">
                        프레임워크를 고도화하고 다른 프레임워크와 접목해 사용한
                        경험
                      </span>
                      이 있습니다.
                    </p>
                    <p>
                      <span className="hightlight">기획부터 개발, 운영</span>
                      까지 프로젝트 전반적인 과정에 참여하고 경험을 쌓고 있으며,
                      <br />
                      개발 완료로 끝나는 것이 아닌, 
                      <span className="hightlight">지속할 수 있는 개발</span>
                      을 지향합니다.
                      <br />
                      <span className="hightlight">건강한 협업 문화</span>를
                      만드는 일을 좋아합니다.
                      <br />
                      스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀 구성원들과
                      위클리 회의 문화를 제안해 개발 상황과 이슈에 대한 원활한
                      소통문화를 만들어 나간 경험이 있습니다.
                    </p>
                    <div className="wrapper-contact">
                      <div className="arrow">
                        <div className="curve"></div>
                        <div className="point"></div>
                      </div>
                      <div className="contact">
                        <div
                          id="contact"
                          className="contact-circle"
                          onMouseOver={onMouseOver}
                          onClick={moveLocation}
                        >
                          <span className="contact-text">
                            h960502hhj@gmail.com
                          </span>
                        </div>
                        <p
                          id="github"
                          className="button"
                          onClick={moveLocation}
                        >
                          github
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-2"
            ref={(el) => (sectionRef.current[2] = el)}
          >
            <div className="section-0-frame grid-paper">
              <div className="description">
                <h2 className="title shadow">
                  Strength.
                  <div className="pin"></div>
                </h2>
              </div>
            </div>
            <div className="strength-wrapper">
              <ul>
                <li onMouseOver={onMouseOver}>
                  <div className="skill skill-1">
                    <h1 id="react">React</h1>
                  </div>
                  <div id="html" className="skill">
                    <h1 id="html">HTML/CSS</h1>
                  </div>
                  <div id="javascript" className="skill">
                    <h1 id="javascript">Javascript</h1>
                  </div>
                  <div id="qrame" className="skill">
                    <h1 id="qrame">Qrame</h1>
                  </div>
                  <div id="net" className="skill">
                    <h1 id="net">.Net Core</h1>
                  </div>
                  <div id="mysql" className="skill">
                    <h1 id="mysql">MySQL</h1>
                  </div>
                  <div id="sql" className="skill">
                    <h1 id="sql">SQL Server</h1>
                  </div>
                </li>
                <li>
                  <div className="skill-content">
                    <div ref={strengthRef}></div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section
            className="scroll-section"
            id="scroll-section-3"
            ref={(el) => (sectionRef.current[3] = el)}
            //height={`${sceneInfo[3].scrollHeight}px`}
          >
            <div className="wrapper-career"></div>
            <div className="section-0-frame">
              <div className="careerContents">
                <div className="box-wrapper">
                  <div id="box" data-aos="fade-up-right">
                    <h1 className="heading">Mojito 쇼핑몰 솔루션 개발</h1>
                    <div className="data">
                      <span className="date">2021.10 - 2021.12</span>
                    </div>
                    <p className="texts">
                      ASP .Net Core를 이용한 웹페이지 개발
                      <br />
                      모듈화를 통해 요구사항별로 필요한 화면만을 사용할 수
                      있도록 개발
                      <br />
                      서버와의 연동을 위한 API개발 및 쿼리 작성
                    </p>
                  </div>
                </div>
                <div id="box" data-aos="fade-down-left">
                  <h1 className="heading">
                    EasyWork ERP 프로그램 개발 및 운영
                  </h1>
                  <div className="data">
                    <span className="date">
                      2021.03 - 2021.10 / 2022.01 - 현재
                    </span>
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
                      <span className="date">
                        2020.10 - 2020.12 / 2021.01 - 2021.03
                      </span>
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
                    <span className="date">2019.10 - 2019.12</span>
                  </div>
                  <p className="texts">
                    원단 판매 사업의 판매 프로세스 개선을 위한 원단 추천 AI
                    프로젝트
                    <br />
                    vue.js를 사용하여 AI기반 구매자 추천 소재 제안 알고리즘
                    시현을 위한 데모 화면 개발
                    <br />
                    사내 프레임워크인 Qrame을 사용한 AI Admin 페이지 개발
                    <br />
                    ML.NET을 이용한 AI 테스트용 API 개발
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;

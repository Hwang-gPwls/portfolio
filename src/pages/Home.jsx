import React from "react";
import { useState, useEffect, useRef, useScroll } from "react";
import "../main.css";

useScroll = () => {
  // 스크롤 X, Y 좌표를 객체로 저장`
  const [position, setPosition] = useState({
    yOffset: 0
  });

  const onScroll = () => {
    setPosition({yOffset: window.pageYOffset});
    //setPosition((prev) => ({ ...prev, yOffset: window.pageYOffset }));
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [window.pageYOffset]);

  return position;
};

const Home = () => {
  const sectionRef = useRef([]);
  const messageRef = useRef([]);

  let { yOffset} = useScroll();

  const [windowHeightSize, setWindowHeightSize] = useState(window.innerHeight);
  const [preY, setPreY] = useState(yOffset);

  const [prevScollHeight, setPrevScollHeight] = useState(0);
  const [curScene, setCurScene] = useState(0);

  const [sceneInfo, setSceneInfo] = useState([
    {
      //0
      id:0,
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
        messageA_opacity: [0, 1],
      },
    },
    {
      //1
      id:1,
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
    },
    {
      //2
      id:2,
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
    },
    {
      //3
      id:3,
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
    },
  ]);

  const setLayout = () => {
    // 각 스크롤 섹션의 높이 셋팅
    for (let i = 0; i < sceneInfo.length; i++) {
      debugger;
      sceneInfo[i] = {...sceneInfo[i], scrollHeight:sceneInfo[i].heightNum * windowHeightSize};
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

  const scrollLoop = () => {
    setPrevScollHeight(0);
    for (let i = 0; i < curScene; i++) {
      setPrevScollHeight(prevScollHeight + sceneInfo[i].scrollHeight);
    }

    console.log(curScene);
    if (yOffset > prevScollHeight + sceneInfo[curScene].scrollHeight) {
      setCurScene(1);
      //sectionbodyRef.current.setAttribute("id", `show-scene-${curScene}`);
    }

    if (yOffset < prevScollHeight) {
      if (curScene === 0) return; //브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
      setCurScene(curScene - 1);
      //sectionbodyRef.current.setAttribute("id", `show-scene-${curScene}`);
    }
  };

  //const calcValues = (values) => {};

  /*
  const playAnimation = () => {
    const objs = curScene[curScene].objs;
    const values = curScene[curScene].values.messageA_opacity;

    switch (curScene) {
      case 0:
        let messageA_opacity_0 = values[0].values.messageA_opacity[0];
        let messageA_opacity_1 = values[0].values.messageA_opacity[1];
        break;
      case 1:
        break; 
      case 2:
        break;
      case 3:
        break;
    }
  };
  */

  useEffect(() => {
    if (yOffset !== preY) {
      console.log(`11111`);
      setPreY(yOffset);
      scrollLoop();
    } else {
      console.log(`22222`);
      const handleResize = () => {
        setWindowHeightSize(window.innerHeight);
      };

      setLayout();
      // scrollLoop();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowHeightSize, yOffset]);

  return (
    <div>
      <div id={`show-scene-${curScene}`}>
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
          <nav className="local-nav">
            <div className="local-nav-links">
              <a href="" className="product-name">
                AirMug Pro
              </a>
              <a href="">개요</a>
              <a href="">제품사양</a>
              <a href="">구입하기</a>
            </div>
          </nav>

          <section
            className="scroll-section"
            id="scroll-section-0"
            ref={(el) => (sectionRef.current[0] = el)}
            //height={`${sceneInfo[0].scrollHeight}px`}
          >
            <h1>AirMug Pro</h1>
            <div
              className="sticky-elem main-message main-message-a"
              ref={(el) => (messageRef.current[0] = el)}
            >
              <p>
                온전히 빠져들게 하는 <br />
                최고급 세라믹
              </p>
            </div>
            <div
              className="sticky-elem main-message main-message-b"
              ref={(el) => (messageRef.current[1] = el)}
            >
              <p>
                주변 맛을 느끼게 해주는 <br />
                주변 맛 허용 모드
              </p>
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
            <p className="description">
              <strong>보통 스크롤 영역</strong>
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

          <section
            className="scroll-section"
            id="scroll-section-2"
            ref={(el) => (sectionRef.current[2] = el)}
            //height={`${sceneInfo[2].scrollHeight}px`}
          >
            <div className="sticky-elem main-message">
              <p>
                <small>편안한 촉감</small>
                입과 하나 되다
              </p>
            </div>
            <div className="sticky-elem desc-messae">
              <p>
                편안함 목넘김을 완성하는 디테일한 여러 구성 요소로, 우리는 이를
                하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의
                머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새
                사라지고 오롯이 음료만 남게 되죠.
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
              <strong>textText</strong>
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

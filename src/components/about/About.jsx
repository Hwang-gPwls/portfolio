import React from "react";
import gsap from "gsap";
import "./About.css";

const moveLocation = (e) => {
  if (e.target.id === "github") {
    window.open("https://github.com/Hwang-gPwls");
  }

  if (e.target.id === "contact") {
  }
};

const onMouseOver = (e) => {
  let tl = gsap.timeline();
  tl.to(e.target, { y: -40, duration: 0.5 });
  tl.to(e.target, { y: 0, duration: 3 });
};

const About = () => {
  return (
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
              경험을 통해 성장하고, 새로운 도전을 두려워 하지 않는 개발자 황혜진
              입니다.
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
                프레임워크를 고도화하고 다른 프레임워크와 접목해 사용한 경험
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
              <span className="hightlight">건강한 협업 문화</span>를 만드는 일을
              좋아합니다.
              <br />
              스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀 구성원들과 위클리
              회의 문화를 제안해 개발 상황과 이슈에 대한 원활한
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
                  <span className="contact-text">h960502hhj@gmail.com</span>
                </div>
                <p id="github" className="button" onClick={moveLocation}>
                  github
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

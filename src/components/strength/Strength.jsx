import React, { useRef } from "react";
import gsap from "gsap";
import "../strength/Strength.css";

const skills = [
  {
    key: "react",
    skillName: "React",
  },
  {
    key: "html",
    skillName: "Html",
  },
  {
    key: "javascript",
    skillName: "Javascript",
  },
  {
    key: "qrame",
    skillName: "Qrame",
  },
  {
    key: "net",
    skillName: ".Net Core",
  },
  {
    key: "mysql",
    skillName: "MySql",
  },
  {
    key: "sql",
    skillName: "SQL Server",
  },
];


const Strength = () => {
  const strengthRef = useRef(null);

  const onMouseOver = (e) => {
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

      let tl = gsap.timeline();
      tl.to(e.target, { y: -40, duration: 0.5 });
      tl.to(e.target, { y: 0, duration: 1 });
    }
  };

  return (
    <>
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
        {skills.map((item) => (
          <div id={item.key} key={item.key} className={item.key === "react" ? "skill skill-1" : "skill"}>
            <h1 id={item.key}>{item.skillName}</h1>
          </div>
        ))}
          </li>
          <li>
            <div className="skill-content">
              <div ref={strengthRef}></div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default React.memo(Strength);

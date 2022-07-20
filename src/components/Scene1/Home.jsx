import React from "react";
import "./Scene1.css";

const Home = () => {
  return (
    <div className="section-0-frame greeting-wrapper">
      <div className="header-section">
        <div className="header-section-1" />
        <div className="header-section-1-1" />
      </div>
      <div className="header-section2">
        <div className="header-section2-1">
          <div className="header-section2-1-1"></div>
          <div className="header-section2-1-2">Hyejin Hwang</div>
          <div className="header-section2-1-3">Portfolio</div>
          <div className="header-section2-1-4">
            새로운 도전을 두려워하지 않고,
          </div>
          <div className="header-section2-1-4">
            경험을 통해 성장하는 황혜진 입니다.
          </div>
        </div>
        <div className="header-section2-2">
          <svg className="main-text">
            <text x="50%" y="50%">
              HI, I'M HYEJIN HWANG
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;

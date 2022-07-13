import React, { forwardRef } from "react";
import "./Home.css";

const Scene1 = ({}, ref) => {
  return (
    <>
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
            <svg>
              <text x="50%" y="50%">
                HI, I'M HYEJIN HWANG
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div
        className="sticky-elem main-message main-message-a"
        ref={(el) => (ref.current[0] = el)}
      >
        <p>
          ACTUALLY, I'M A WEBSITE
          <br />I WAS BUILT BY HYEJIN HWANG
        </p>
      </div>
      <div
        className="sticky-elem main-message main-message-b"
        ref={(el) => (ref.current[1] = el)}
      >
        <p>HyeJin Hwang</p>
      </div>
      <div
        className="sticky-elem main-message main-message-c"
        ref={(el) => (ref.current[2] = el)}
      >
        <p>
          FRONTEND
          <br />
          DEVELOPER
        </p>
      </div>
      <div
        className="sticky-elem main-message main-message-d"
        ref={(el) => (ref.current[3] = el)}
      >
        <p>WEB DEVELOPER</p>
      </div>
    </>
  );
};

export default forwardRef(Scene1);

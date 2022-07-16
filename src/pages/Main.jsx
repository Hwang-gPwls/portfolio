import React from "react";
import Header from "../components/header/Header";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";
import Scene4 from "../components/Scene4";
import "../main.css";

const Main = () => {
  return (
    <div id="body" className="before-load">
      <div id="show-scene-0">
        {/* <div className="loading">
          <svg className="loading-circle">
            <circle cx="50%" cy="50%" r="25"></circle>
          </svg>
        </div> */}
        <div className="container">
          <Header />

          <section className="scroll-section" id="scroll-section-0">
            <Scene1 />
          </section>

          <section className="scroll-section" id="scroll-section-1">
            <Scene2 />
          </section>

          <section className="scroll-section" id="scroll-section-2">
            <Scene3 />
          </section>

          <section className="scroll-section" id="scroll-section-3">
            <Scene4 />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;

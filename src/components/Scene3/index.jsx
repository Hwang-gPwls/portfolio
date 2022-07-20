import React, { useEffect } from "react";
import { skills } from "../../public/data";
import Strength from "./Strength";
import AOS from "aos";
import "./Scene3.css";
import "aos/dist/aos.css";

const Scene3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="header-strength"></div>
      <div className="container-strengths">
        <div className="strengths">
          {skills.map((skill, idx) => (
            <div className="wrapper-strength" key={idx.toString()}>
              <Strength skill={skill} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Scene3;

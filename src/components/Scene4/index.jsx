import React from "react";
import { projects } from "../../public/data";
import { Stars } from "react-bootstrap-icons";
import Projects from "./Projects";
import "./Scene4.css";

const Scene4 = () => {
  return (
    <div className="container-scene4">
      <div className="wrapper-header-project">
        <div className="section-0-frame grid-paper">
          <h2 className="header-project shadow">
            in My Career.
           <Stars size= "30" color= "#E09F1F"/>
          </h2>
        </div>
      </div>
      <Projects projects={projects} />
    </div>
  );
};

export default Scene4;

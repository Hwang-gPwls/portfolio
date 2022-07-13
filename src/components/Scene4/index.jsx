import { useEffect } from "react";
import { projects } from "../../public/data";
import Projects from "./Projects";
import AOS from "aos";
import "./Projects.css";
import "aos/dist/aos.css";

const Scene4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    return (
    <>
     <div className="wrapper-career"></div>
        <div className="careerContents">
          <div className="careers">
          <div className="career">
          {projects.map((project, idx) => (
            <div className="project-wrapper" key={idx.toString()}>
            <Projects project={project} idx={idx} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </>);
};
      
export default Scene4;
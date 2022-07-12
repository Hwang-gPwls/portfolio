import { projects } from "../../public/data";
import Projects from "./Projects";
import "./Projects.css";

const Scene4 = () => {
    return (
    <>
     <div className="wrapper-career"></div>
        <div className="careerContents">
          <div className="careers">
          <div className="career">
          {projects.map((project, idx) => (
            <div className="project-wrapper">
            <Projects key={idx.toString()} project={project} idx={idx} />
            </div>
          ))}
          </div>
        </div>
      </div>
    </>);
};
      
export default Scene4;
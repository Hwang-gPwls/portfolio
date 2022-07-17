import { projects } from "../../public/data";
import Projects from "./Projects";
import "./Scene4.css";

const Scene4 = () => {
  return (
    <>
      <div className="section-0-frame grid-paper">
        <div className="wapper-header-project">
          <h2 className="header-project shadow">
            in My Career.
            <div className="pin"></div>
          </h2>
        </div>
      </div>
      <Projects projects={projects} />
    </>
  );
};

export default Scene4;

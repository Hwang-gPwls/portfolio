import React, { useState } from "react";
import gsap from "gsap";
import { DiamondFill, Stars } from "react-bootstrap-icons";

const Projects = ({ projects }) => {
  const [items, setItems] = useState();

  const setProjectVal = (id) => {
    const project = projects.filter((project) => project.key === id)[0];

    const skills = project.skills.map((skill, idx) => (
      <div className="skill" key={idx.toString()}>
        {skill}
      </div>
    ));

    const contents = project.contents.map((content, idx) => (
      <div className="content" key={idx.toString()}>
        <DiamondFill size="10" color="#4a6483" />
        <span>{content}</span>
      </div>
    ));

    setItems(
      <div key={project.key} className="item">
        <div className="date">
          {project.date}
          <Stars size="25" color="#A0ACBD" />
        </div>
        <div className="wrapper-pin">
          <div className="pin" />
        </div>
        <h3>About : </h3>
        <div className="about">{project.about}</div>
        <h3>Skills : </h3>
        <div className="skills">{skills}</div>
        <div className="contents">{contents}</div>
      </div>
    );
  };

  const hovalTitle = (e) => {
    let tl = gsap.timeline();
    tl.to(e.target, { y: -40, duration: 0.5 });
    tl.to(e.target, { y: 0, duration: 1 });

    setProjectVal(e.target.id);
  };

  return (
    <>
      <div className="wrapper-project">
        <div className="container-project">
          <div className="projects">
            {projects.map((project, idx) => (
              <div key={idx.toString()} className="wrapper-title">
                <div
                  id={project.key}
                  className="title"
                  onMouseOver={hovalTitle}
                >
                  {project.title}
                </div>
              </div>
            ))}
          </div>
          <div className="projects">
            <div className="items">{items}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(Projects);

import React, { useState, useCallback } from "react";
import gsap from "gsap";

const Projects = ({ projects }) => {
  const [items, setItems] = useState();

  const setProjectVal = (id) => {
    const project = projects.filter((project) => project.key === id)[0];

    const skills = project.skills.map((skill) => (
      <div className="skill">{skill}</div>
    ));

    const contents = project.contents.map((content) => (
      <div className="content">{content}</div>
    ));

    setItems(
      <div key={project.key} className="item">
        <div className="date">{project.date}</div>
        <div className="background-dot"></div>
        <div className="about">{project.about}</div>
        <div className="skills">{skills}</div>
        <div className="contents">{contents}</div>
      </div>
    );
  };

  const hovalTitle = useCallback((e) => {
    let tl = gsap.timeline();
    tl.to(e.target, { y: -40, duration: 0.5 });
    tl.to(e.target, { y: 0, duration: 1 });

    setProjectVal(e.target.id);
  });

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

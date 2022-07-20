import React, { useState } from "react";
import gsap from "gsap";
import { CircleFill } from "react-bootstrap-icons";

const Projects = ({ projects }) => {
  const [items, setItems] = useState();

  const setProjectVal = (id) => {
    const project = projects.filter((project) => project.key === id)[0];

    const skills = project.skills.map((skill, idx) => (
      <div className="skill" key={idx.toString()}>{skill}</div>
    ));

    const contents = project.contents.map((content, idx) => (
      <div className="content" key={idx.toString()}>{content}</div>
    ));

    setItems(
      <div key={project.key} className="item">
        <div className="date">{project.date}</div>
        <div className="wrapper-pin"><CircleFill size= "11" color= "#E09F1F"/><div className="pin"/></div>
        <div className="about">{project.about}</div>
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

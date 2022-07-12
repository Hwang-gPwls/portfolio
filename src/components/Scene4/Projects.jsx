import React from "react";

const Projects = ({project, idx}) => {
  const isEven = (idx + 1) % 2 === 0;

  return (
    <div className="box-wrapper">
        <div id="box" className={isEven ? "box-right" : "box-left"} data-aos={isEven ? "fade-down-right" : "fade-down-left"}>
          <h1 className="heading">{project.title}</h1>
          <div className="date">
            <span className="date">{project.date}</span>
          </div>
          <div className="skills">
            {project.skills.map((skill) => (
              <div className="skill">{skill}</div>
            ))}
          </div>
          <div className="about">{project.about}</div>
          <div className="contents">
            {project.contents.map((content) => (
              <div className="content">{content}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Projects);

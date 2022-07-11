import React, { useState } from "react";
import gsap from "gsap";

const Strength = ({ skills }) => {
  const [content, setContent] = useState(skills[0].contents.map((content, idx) => (
    <div key={idx.toString()}>
      {content}
    </div>
  )));

  const setHovalItem = (e) => {
    let tl = gsap.timeline();
    tl.to(e.target, { y: -40, duration: 0.5 });
    tl.to(e.target, { y: 0, duration: 1 });

    const contents = skills.filter(skill => skill.key === e.target.id)[0].contents;
    setContent(
      contents.map((content, idx) => (
        <div key={idx.toString()}>
          {content}
        </div>
      )));
  };

  return (
    <>
      <div className="strength-wrapper">
        <ul>
          <li>
            {skills.map((skill, idx) => (
              <div id={skill.key} key={idx.toString()} className={skill.key === "react" ? "skill skill-1" : "skill"}>
                <h1 id={skill.key} onMouseOver={setHovalItem}>{skill.title}</h1>
              </div>
            ))}
          </li>
          <li>
            <div className="skill-content">
              {content}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default React.memo(Strength);

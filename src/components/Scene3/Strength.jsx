import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";

const Projects = ({ skill, idx }) => {
  const isEven = (idx + 1) % 2 === 0;

  return (
    <div className="strenght">
      <div
        id="card"
        className={isEven ? "card-right" : "card-left"}
        data-aos={isEven ? "fade-down-right" : "fade-down-left"}
      >
        <div className="heading">{skill.title}</div>
        <div className="contents">
          {skill.contents.map((content, idx) => (
            <div className="content" key={idx.toString()}>
              <FontAwesomeIcon icon={faSquareCheck} style={{ width: 14 }} />
              {content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Projects);

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
            <div className="wrapper-content paper">
              <FontAwesomeIcon icon={faSquareCheck} size="1.5x" fixedWidth />
              <div className="content" key={idx.toString()}>
                {content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Projects);

import styled from "styled-components";
import { projects } from "../../public/data";
import Projects from "./Projects";
import Header from "./Header";
import React from "react";

const Scene4 = () => {
  return (
    <Container>
      <Header />
      <div className="projects_area">
        <div className="projects_area__box"></div>
        {projects.map((project, idx) => (
          <div className="wrapper_projects" key={idx.toString()}>
            <Projects project={project} idx={idx.toString()} />
          </div>
        ))}
        <div className="wrapper_projects"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 11vh;

  .projects_area {
    height: 77vh;
    border-left: 1.5px solid #7d97b8;
    border-right: 1.5px solid #7d97b8;
    border-bottom: 1.5px solid #7d97b8;

    &__box {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      padding: 0;

      ::-webkit-scrollbar {
        display: none;
      }

      &:not(:last-child) {
        border-right: 1.5px solid #7d97b8;
      }
    }
  }
`;

export default Scene4;

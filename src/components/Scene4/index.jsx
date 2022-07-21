import React from "react";
import styled from "styled-components";
import { projects } from "../../public/data";
import Projects from "./Projects";
import Header from "./Header";


const Scene4 = () => {
  return (
    <Container>
      <Header/>
      <Projects projects={projects} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 90px;
`;

export default Scene4;

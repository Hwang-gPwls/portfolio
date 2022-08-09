import React from "react";
import styled from "styled-components";
import { skills } from "../../public/data";
import Strength from "./Strength";

const Scene3 = () => {
  return (
    <Panel>
      <Header text={"Strength."} />
      <Container>
        <div className="wrapper">
          {skills.map((skill, idx) => (
            <div className="wrapper_skills" key={idx.toString()}>
              <Strength skill={skill} idx={idx} />
            </div>
          ))}
        </div>
      </Container>
    </Panel>
  );
};

const Panel = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 9vh;
`;

const Header = styled.div<{ text: string }>`
  position: relative;
  display: flex;
  height: 4rem;
  font-weight: bold;
  font-size: 5rem;
  text-shadow: 6px 5px 0px ${({ theme }) => theme.color.blue},
    7px 6px 0px ${({ theme }) => theme.color.blue},
    7px 6px 0px ${({ theme }) => theme.color.blue};

  ::after {
    position: absolute;
    margin-left: 3rem;
    top: 1rem;
    left: -0.4rem;
    color: transparent;
    content: "${({ text }) => `${text}`}";
    -webkit-text-stroke: 0.1rem #000000;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  overflow-x: hidden;
  margin-top: 2rem;
  border: 1.5px solid ${({ theme }) => theme.color.blue};

  .wrapper {
    width: inherit;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_skills {
      width: inherit;
      padding: 1rem;
    }
  }
`;

export default Scene3;

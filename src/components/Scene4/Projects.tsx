import React, { useState, MouseEvent } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { CircleFill, Stars } from "react-bootstrap-icons";

type ProjectsProps = {
  key: string;
  title: string;
  date: string;
  skills: string[];
  about: string;
  contents: string[];
}[];

const Projects = ({ projects }: { projects: ProjectsProps }) => {
  const [items, setItems] = useState({
    key: projects[0].key,
    date: projects[0].date,
    about: projects[0].about,
    skills: projects[0].skills,
    contents: projects[0].contents,
  });

  const setProjectVal = (id: string) => {
    const filteredItem = projects.filter((project) => project.key === id)[0];
    setItems(filteredItem);
  };

  const hovalTitle = (e: MouseEvent<HTMLElement>) => {
    let tl = gsap.timeline();
    tl.to(e.target, { y: -40, duration: 0.5 });
    tl.to(e.target, { y: 0, duration: 1 });

    if (e.target instanceof Element) setProjectVal(e.target.id);
  };

  return (
    <Container>
      <div className="box">
        <div className="box_projects">
          {projects.map((project, idx) => (
            <div key={idx.toString()} className="box_title">
              <Title id={project.key} onMouseOver={hovalTitle}>
                {project.title}
              </Title>
            </div>
          ))}
        </div>
        <div className="box_projects">
          <Item>
            <div key={items.key} className="itembox">
              <Date>
                <Stars size="25" color="#A0ACBD" />
                {items.date}
              </Date>
              <div className="wrapper-pin">
                <div className="wrapper-pin_pin" />
              </div>
              <h3>About : </h3>
              <About>{items.about}</About>
              <h3>Skills : </h3>
              <Skills>
                {items.skills.map((skill, idx) => (
                  <div className="skill" key={idx.toString()}>
                    {skill}
                  </div>
                ))}
              </Skills>
              <Contents>
                {items.contents.map((content, idx) => (
                  <div className="content" key={idx.toString()}>
                    <CircleFill size="8" color="#4a6483" />
                    <span>{content}</span>
                  </div>
                ))}
              </Contents>
            </div>
          </Item>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 77vh;
  border-left: 1.5px solid ${({ theme }) => theme.color.black};
  border-right: 1.5px solid ${({ theme }) => theme.color.black};
  border-bottom: 1.5px solid ${({ theme }) => theme.color.black};
  .box {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0;

    &_projects {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none;
      }

      &:not(:last-child) {
        border-right: 1.5px solid ${({ theme }) => theme.color.black};
      }
    }
  }

  .box_title {
    font-size: 0.5rem;
    width: 100%;
    height: 150px;
    &:not(:last-child) {
      border-bottom: 1.5px solid ${({ theme }) => theme.color.black};
    }
  }
`;

const Title = styled.div`
  width: 100%;
  position: relative;
  top: 50px;
  text-align: center;
  color: transparent;
  font-size: 2rem;
  font-weight: bolder;
  -webkit-text-stroke: 1px ${({ theme }) => theme.color.black};

  &:hover {
    color: ${({ theme }) => theme.color.black};
    -webkit-text-stroke: 1px ${({ theme }) => theme.color.white};
  }
  
  .titleHoval {
    color: ${({ theme }) => theme.color.black};
    -webkit-text-stroke: 1px ${({ theme }) => theme.color.white};
  }
  .
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;

  &h3 {
    margin: 2rem 0 0 0;
    text-align: left;
    font-size: 1.3rem;
  }

  .itembox {
    padding: 3rem;
    color: ${({ theme }) => theme.color.black};
  }

  .wrapper-pin {
    width: 100%;
    display: flex;

    &_pin {
      width: 100%;
      height: 2px;
      margin: 0.3rem 0.5rem;
      background-color: ${({ theme }) => theme.color.blueGray};
    }
  }
`;

const Date = styled.div`
  font-size: 1.1rem;
  text-align: center;
  margin: 1rem 0;
`;

const About = styled.div`
  margin: 1rem;
  text-align: left;
  font-size: 1.2rem;
`;

const Skills = styled.div`
  display: flex;
  justify-content: left;
  margin: 1rem;

  .skill {
    height: 2rem;
    line-height: 2rem;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 0.5rem;

    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`;

const Contents = styled.div`
  border: 1.5px solid ${({ theme }) => theme.color.black};
  white-space: pre-line;
  padding: 1rem;
  margin: 2rem 0 0 0;
  line-height: 230%;
  font-size: 1.1rem;
  text-align: left;

  .content span {
    margin-left: 1.2rem;
  }
`;

export default React.memo(Projects);

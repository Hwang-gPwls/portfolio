import React, { useEffect } from "react";
import styled from "styled-components";
import Contact from "./Contact";
import TextWavy from "./TextWavy";
import AOS from "aos";
import "aos/dist/aos.css";

const Scene2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <DividingLine>
        <div className="pin" />
        <span>About</span>
      </DividingLine>
      <Container>
        <TextWavy />
        <Contact />
        <About>
          <Arrow>
            <div className="curve"></div>
            <div className="point"></div>
          </Arrow>
          <div className="heading" data-aos="fade-right">
            경험을 통해 성장하고, 새로운 도전을 두려워 하지 않는 개발자 황혜진
            입니다.
          </div>
          <div data-aos="fade-right">
            주로 웹 서비스 개발을 담당하였으며, 사람들에게 편의와 긍정적인
            영향을 줄 수 있는 좋은 서비스를 개발하고 발전시키는 데에 관심이
            많습니다.
            {"\n"}
            회사에서 자체적으로 개발한 프레임워크인 Qrame 기능 확장 및
            유지보수에 참여하여 해당 
            <Highlight>프레임워크를 고도화</Highlight>하고 다른
            프레임워크와 접목해 사용한 경험이 있습니다.
            {"\n"}
            기획부터 개발, 운영까지 
            <Highlight>프로젝트 전반적인 과정에 참여</Highlight>하고 경험을 쌓고
            있으며,
            {"\n"}
            개발과정에만 국한된 것이 아닌, 기획과 운영, 프로젝트 확장까지
            고려하고 적용할 수 있는 개발자가 되기 위해 노력합니다.
            {"\n"}
            <Highlight>건강한 협업 문화</Highlight>를 만들어가는 데에 관심이
            많습니다.
            {"\n"}
            스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀 구성원들과 위클리 회의
            문화를 제안해 개발 상황과 이슈에 대한 원활한 소통문화를 만들어
            나간 경험이 있습니다.
          </div>
        </About>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
`;

const DividingLine = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  .pin {
    margin: 1.4rem 0.5rem 0 0;
    width: 100%;
    height: 1.5px;
    margin-bottom: 1.5rem;
    background-color: ${({ theme }) => theme.color.black};
  }
`;

const Arrow = styled.div`
  position: relative;
  width: 0.1rem;

  .curve {
    position: absolute;
    top: -8rem;
    left: 7.1rem;
    height: 8rem;
    width: 10rem;
    border: 4px solid ${({ theme }) => theme.color.pink};
    border-color: transparent transparent transparent
      ${({ theme }) => theme.color.pink};
    border-radius: 230px 0 0 150px;
  }

  .point {
    position: absolute;
    left: 8rem;
    top: -1rem;

    ::before,
    ::after {
      background-color: ${({ theme }) => theme.color.pink};
      border: 2px solid ${({ theme }) => theme.color.pink};
      height: 25px;
      content: "";
      position: absolute;
    }

    ::before {
      top: -9px;
      left: -11px;
      transform: rotate(-74deg);
      -webkit-transform: rotate(-74deg);
      -moz-transform: rotate(-74deg);
      -ms-transform: rotate(-74deg);
    }

    ::after {
      top: -20px;
      left: 5px;
      transform: rotate(12deg);
      -webkit-transform: rotate(12deg);
      -moz-transform: rotate(12deg);
      -ms-transform: rotate(12deg);
    }
  }
`;

const About = styled.div`
	white-space: pre-line;
	padding: 2rem;
	margin-top: 4.2rem;
	font-size: 1.1rem;
	line-height: 230%;
	border: 1px solid ${({ theme }) => theme.color.black};
	border-radius: 30px;
	color: ${({ theme }) => theme.color.black};

  .heading {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-style: bold;
    color: ${({ theme }) => theme.color.black};
  }
`;

const Highlight = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin: 0 0.3rem;
  background-color: ${({ theme }) => theme.color.pink};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Scene2;

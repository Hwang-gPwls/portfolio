import React from "react";
import styled from "styled-components";
import Contact from "./Contact";
import TextWavy from "./TextWavy";

const Scene2 = () => {
  return (
    <div className="section-0-frame">
      <Container>
        <TextWavy />
        <About>
          <div className="heading">
            경험을 통해 성장하고, 새로운 도전을 두려워 하지 않는 개발자 황혜진
            입니다.
          </div>
          <div>
            사람들에게 편의와 긍정적인 영향을 줄 수 있는 좋은 서비스를 개발하고
            발전시키는 데에 관심이 많습니다.
            {"\n"}
            주로 웹 서비스 개발을 담당하였으며,
            회사에서 자체적으로 개발한 프레임워크인 Qrame 기능 확장 및
            유지보수에 참여하여 해당 
            <Highlight>프레임워크를 고도화하고 다른 프레임워크와 접목해 사용한 경험</Highlight>
            이 있습니다.
              <Highlight>기획부터 개발, 운영</Highlight>
            까지 프로젝트 전반적인 과정에 참여하고 경험을 쌓고 있으며, 개발
            완료로 끝나는 것이 아닌, 
              <Highlight>지속할 수 있는 개발</Highlight>
            을 지향합니다.
            {"\n"}
              <Highlight>건강한 협업 문화</Highlight>
            를 만드는 일을 좋아합니다.
            {"\n"}
            스케쥴과 이슈 관리가 되지 않는 점이 있어, 팀 구성원들과 위클리 회의
            문화를 제안해 개발 상황과 이슈에 대한 원활한 소통문화를 만들어
            나간 경험이 있습니다.
          </div>
        </About>
        <Contact />
      </Container>
    </div>
  );
};

const Container = styled.div`
max-width: 1000px;
padding: 0 1rem;
margin: 0 auto;
`;

const About = styled.div`
white-space: pre-line;
margin-top: 3rem;
font-size: 1.1rem;
line-height: 230%;
color: #000000;

.heading{
  margin: 0.5 auto;
  font-size: 1.5rem;
  font-style: bold;
  color: #000000;
}
`;

const Highlight = styled.span`
font-weight: 700;
font-size: 1.3rem;
margin-left: 0.3rem;
background-color: #8079a6;;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export default Scene2;

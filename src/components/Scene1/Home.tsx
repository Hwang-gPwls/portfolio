import styled, { keyframes } from "styled-components";

const Home = () => {
  return (
    <Container>
      <Main>
        <div className="section1" />
        <div className="section2" />
      </Main>
      <MainText>
        <div className="section3">
          <div className="section3_blank"></div>
          <div className="section3_name">Hyejin Hwang</div>
          <div className="section3_portfolio">Portfolio</div>
          <div className="section3_info">새로운 도전을 두려워하지 않고,</div>
          <div className="section3_info">
            경험을 통해 성장하는 황혜진 입니다.
          </div>
        </div>
        <div className="section4">
          <TextAnimayion>
            <text x="50%" y="50%">
              Hi, I'M HYEJIN HWANG
            </text>
          </TextAnimayion>
        </div>
      </MainText>
    </Container>
  );
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 83.5vh;
  border: 1.5px solid ${({ theme }) => theme.color.blue};
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  border-bottom: solid;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.color.blue};

  .section1 {
    width: 16%;
    height: 100%;
    border-right: solid;
    border-width: 1.5px;
    border-color: ${({ theme }) => theme.color.blue};
    background: repeating-linear-gradient(
      45deg,
      #f9f0e0,
      #f9f0e0 9px,
      ${({ theme }) => theme.color.blue} 5px,
      ${({ theme }) => theme.color.blue} 12px
    );
  }

  .section2 {
    width: 84%;
  }
`;

const MainText = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;

  .section3 {
    width: 16%;
    height: 100%;
    border-right: solid;
    border-width: 1.5px;
    border-color: ${({ theme }) => theme.color.blue};

    &_info {
      padding-left: 10%;
      text-align: left;
      color: ${({ theme }) => theme.color.blue};
      font-size: 0.85vw;
    }

    &_blank {
      width: 100%;
      height: 70%;
    }

    &_name {
      padding-left: 10%;
      text-align: left;
      color: ${({ theme }) => theme.color.blue};
      font-size: 1.5vw;
    }

    &_portfolio {
      padding: 4% 10%;
      text-align: left;
      color: ${({ theme }) => theme.color.blue};
      font-size: 1vw;
    }
  }

  .section4 {
    width: 84%;
  }
`;

const Dash = keyframes`
from {
  stroke-dashoffset: 1000;
}
to {
  stroke-dashoffset: 0;
}
`;

const TextAnimayion = styled.svg`
  width: 100%;
  height: 100%;
  font-size: 6vw;
  font-weight: bold;
  stroke: ${({ theme }) => theme.color.purple};
  stroke-width: 1.5px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  fill: transparent;
  animation: ${Dash} 5s ease-out alternate infinite;
  text-anchor: middle;
  alignment-baseline: middle;
`;

export default Home;

import React from "react";
import styled, { keyframes } from "styled-components";

const TextWavy = () => {
  return (
    <Wavy>
      <div className="waviy">
        <Char style={{ "--i": 1 }}>F</Char>
        <Char style={{ "--i": 2 }}>R</Char>
        <Char style={{ "--i": 3 }}>O</Char>
        <Char style={{ "--i": 4 }}>N</Char>
        <Char style={{ "--i": 5 }}>T</Char>
        <Char style={{ "--i": 6 }}>E</Char>
        <Char style={{ "--i": 7 }}>N</Char>
        <Char style={{ "--i": 8 }}>D</Char>
        <span> </span>
        <Char style={{ "--i": 9 }}>D</Char>
        <Char style={{ "--i": 10 }}>E</Char>
        <Char style={{ "--i": 11 }}>V</Char>
        <Char style={{ "--i": 12 }}>E</Char>
        <Char style={{ "--i": 13 }}>L</Char>
        <Char style={{ "--i": 14 }}>O</Char>
        <Char style={{ "--i": 15 }}>P</Char>
        <Char style={{ "--i": 16 }}>E</Char>
        <Char style={{ "--i": 17 }}>R</Char>
        <Char style={{ "--i": 18 }}>.</Char>
      </div>
    </Wavy>
  );
};

const Wavy = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  .waviy {
    position: relative;
    top: 1rem;
    font-size: 3vw;
    font-weight: bold;
  }
`;

const Waviy = keyframes`
0%,
40%,
100% {
  transform: translateY(0);
}
20% {
  transform: translateY(-20px);
}
`;

const Char = styled.span`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.color.peach};
  -webkit-text-stroke: 1.5px ${({ theme }) => theme.color.pink};
  animation: ${Waviy} 2s infinite;
  animation-delay: calc(0.1s * var(--i));
`;

export default TextWavy;

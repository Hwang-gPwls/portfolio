import React from "react";
import styled, { keyframes } from "styled-components";

const TextWavy = () => {
  return (
    <Wavy>
      <div className="waviy">
        <Char>F</Char>
        <Char>R</Char>
        <Char>O</Char>
        <Char>N</Char>
        <Char>T</Char>
        <Char>E</Char>
        <Char>N</Char>
        <Char>D</Char>
        <span> </span>
        <Char>E</Char>
        <Char>V</Char>
        <Char>E</Char>
        <Char>L</Char>
        <Char>O</Char>
        <Char>P</Char>
        <Char>E</Char>
        <Char>R</Char>
        <Char>.</Char>
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

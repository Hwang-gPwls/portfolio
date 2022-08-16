import { useCallback, useState } from "react";
import styled from "styled-components";
import useScroll from "../hooks/useScroll";
import Header from "../components/header/Header";
import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Main = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowButton = useCallback(() => {
    if (window.scrollY > 500) {
      setIsShowButton(true);
    } else {
      setIsShowButton(false);
    }
  }, [true, false]);

  useScroll(handleShowButton);

  return (
    <div id="body" className="before-load">
      <div>
        {/* <div className="loading">
          		<svg className="loading-circle">
            		<circle cx="50%" cy="50%" r="25"></circle>
          		</svg>
        		</div> */}
        <Container>
          <Header />
          <section className="scroll-section" id="scroll-section-0">
            <Scene1 />
          </section>
          <section className="scroll-section" id="scroll-section-1">
            <Scene2 />
          </section>
        </Container>
        {isShowButton && (
          <ScrollBtn>
            <button onClick={scrollToTop} type="button" className="topButton">
              <FontAwesomeIcon icon={faArrowUp} size="5x" fixedWidth />
            </button>
          </ScrollBtn>
        )}
      </div>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ScrollBtn = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  z-index: 1;

  .topButton {
    padding: 15px 13px;
    background-color: transparent;
    color: #b78897;
    border: 1.5px solid #b78897;
    border-radius: 50%;
    outline: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #b78897;
    }
  }
`;

export default Main;

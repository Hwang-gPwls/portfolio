import styled from "styled-components";
import { Stars } from "react-bootstrap-icons";
import React from "react";

const Header = () => {
  return (
    <Container>
      <div className="grid-paper section-0-frame">
        <h2 className="header shadow">
          in My Career.
          <Stars size="30" color="#E09F1F" />
        </h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10%;
  margin: 0 auto;

  .section-0-frame {
    border: 1.5px solid #7d97b8;
  }

  .grid-paper {
    background-color: #f6f6f6;
    background-image: linear-gradient(
        90deg,
        #cdcccc 0px,
        #cdcccc 1px,
        transparent 1px,
        transparent 99px,
        transparent 100px
      ),
      linear-gradient(
        #cdcccc 0px,
        #cdcccc 1px,
        transparent 1px,
        transparent 99px,
        transparent 100px
      ),
      linear-gradient(
        #e0e0e0 0px,
        #e0e0e0 1px,
        transparent 1px,
        transparent 99px,
        transparent 100px
      ),
      linear-gradient(
        90deg,
        #e0e0e0 0px,
        #e0e0e0 1px,
        transparent 1px,
        transparent 99px,
        transparent 100px
      ),
      linear-gradient(
        transparent 0px,
        transparent 5px,
        #f6f6f6 5px,
        #f6f6f6 95px,
        transparent 95px,
        transparent 100px
      ),
      linear-gradient(
        90deg,
        #e0e0e0 0px,
        #e0e0e0 1px,
        transparent 1px,
        transparent 99px,
        #e0e0e0 99px,
        #e0e0e0 100px
      ),
      linear-gradient(
        90deg,
        transparent 0px,
        transparent 5px,
        #f6f6f6 5px,
        #f6f6f6 95px,
        transparent 95px,
        transparent 100px
      ),
      linear-gradient(
        transparent 0px,
        transparent 1px,
        #f6f6f6 1px,
        #f6f6f6 99px,
        transparent 99px,
        transparent 100px
      ),
      linear-gradient(#cdcccc, #cdcccc);
    background-size: 100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px,
      100px 100%, 100px 100%, 100px 100px, 100px 100px;
  }

  .header {
    font-size: 3rem;
    color: #ffffff;
    -webkit-text-stroke: 1.5px #4a6483;
    margin-left: 3rem;
  }

  .shadow {
    text-shadow: 8px 5px 0px #4a6483;
  }
`;

export default Header;

import React from "react";
import styled from "styled-components";
import HeaderNeon from "./animation/HeaderNeon";

const Container = styled.header`
  width: 100%;
  height: 50vh;
  position: relative;
`;

const Centence = styled.div`
  h1 {
    font-size: 40px;
    position: absolute;
    top: 50px;
    left: 20%;
    z-index: 3;
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
    animation: ${HeaderNeon} 2s infinite alternate;
  }
  p {
    font-size: 160px;
    position: absolute;
    top: 70px;
    left: 30%;
    opacity: 0.2;
    text-shadow: rgba(0, 0, 0, 1) 1px 0 10px;
    font-weight: bolder;
  }
`;

const Header = () => {
  return (
    <Container>
      <Centence>
        <h1>FullStack Developer를 꿈꾸는..</h1>
        <p>
          JavaScript <br /> Developer
        </p>
      </Centence>
    </Container>
  );
};

export default Header;

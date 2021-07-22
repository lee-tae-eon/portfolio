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
    color: #aeafb0;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px black,
      0 0 82px black, 0 0 92px black, 0 0 102px black, 0 0 151px black;
    animation: ${HeaderNeon} 4s infinite linear;
  }
  p {
    font-size: 160px;
    position: absolute;
    top: 70px;
    left: 30%;
    opacity: 0.2;
    text-shadow: rgba(255, 255, 255, 1) 2px 2px 20px;
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

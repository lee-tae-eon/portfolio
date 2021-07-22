import React from "react";
import styled from "styled-components";
import HeaderNeon from "./animation/HeaderNeon";
import mainBack from "../static/Image/MainBack/mainBack.jpeg";

const Container = styled.header`
  width: 100%;
  height: 75vh;
  position: relative;
  background-image: url(${mainBack});
  background-size: cover;
  background-position: center center;
`;

const Centence = styled.div`
  h1 {
    font-size: 40px;
    position: absolute;
    top: 50px;
    right: 20%;
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
    right: 20%;
    opacity: 0.5;
    text-shadow: rgba(0, 0, 0, 1) 2px 2px 20px;
    font-weight: bolder;
  }
`;

const Header = () => {
  return (
    <Container>
      <Centence>
        <h1>도전과 모험을 즐기는</h1>
        <p>
          JavaScript <br /> Developer
        </p>
      </Centence>
    </Container>
  );
};

export default Header;

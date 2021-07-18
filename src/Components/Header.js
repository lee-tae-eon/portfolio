import React from "react";
import ProfileImage from "../static/Image/profile.jpeg";
import styled from "styled-components";

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
  }
  p {
    font-size: 60px;
    position: absolute;
    top: 70px;
    left: 30%;
    opacity: 0.3;
    text-shadow: rgba(0, 0, 0, 0.8) 1px 0 10px;
  }
`;

const Header = () => {
  return (
    <Container>
      <Centence>
        <h1>FullStack Developer를 꿈꾸는..</h1>
        <p>JavaScript Developer</p>
      </Centence>
    </Container>
  );
};

export default Header;

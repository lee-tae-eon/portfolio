import React, { useState } from "react";
import styled, { css } from "styled-components";
import TitleNeon from "./animation/TitleNeon";
import devflixMain from "../static/Image/portfolio/devflixMain.png";

const PortSection = styled.section``;

const Title = styled.h1`
  max-width: 600px;
  width: 100%;
  padding: 20px 30px;
  font-size: 45px;
  font-weight: bolder;
  margin: auto;
  margin-top: 40px;
  text-align: center;
  border-radius: 5px;
  animation: ${TitleNeon} 3s ease infinite;
  cursor: pointer;
`;

const Container = styled.div`
  margin-top: 80px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  font-size: 50px;
  cursor: pointer;
  &:hover {
    font-size: 80px;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1020px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(3px);
  button {
    all: unset;
    position: absolute;
    right: 0;
    top: -20px;
    cursor: pointer;
  }
  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    color: red;
  }
`;

export const BGBlur = css`
  filter: blur(${(props) => props.current});
`;

const PortFoilo = () => {
  const [modal, cbmodal] = useState(false);

  return (
    <PortSection>
      <Title>LEE TAE EON's PORTFOLIO</Title>
      <Container current={modal === true ? "25px" : null}>
        <List>
          <Item onClick={() => cbmodal(true)}>
            <h3>DEVFLIX</h3>
            <p> Click Me !!!!!</p>
          </Item>
          <Item>
            <h3>GyumTube</h3>
            <p> Click Me !!!!!</p>
          </Item>
          <Item>
            <h3>CocoaClone</h3>
            <p> Click Me !!!!!</p>
          </Item>
          <Item>
            <h3>Auto Mask Checking Bot</h3>
            <p> Click Me !!!!!</p>
          </Item>
        </List>
        {modal === true ? <PortModal modal={modal} cbmodal={cbmodal} /> : null}
      </Container>
    </PortSection>
  );
};

const PortModal = (props) => (
  <Modal>
    {console.log(props)}
    <button>❌</button>

    <img alt="" src={devflixMain} />
    <h1>DevFlix</h1>
    <p>
      Netflix를 clone한 site로 moviedata api를 Ajax방식으로 실시간으로 데이터를
      가져와 뿌려줌 class components를 사용
    </p>
    <a href="https://lee-tae-eon.github.io/devflix/#/" target="_blank">
      https://lee-tae-eon.github.io/devflix/#/ &larr; Click!
    </a>
  </Modal>
);

export default PortFoilo;

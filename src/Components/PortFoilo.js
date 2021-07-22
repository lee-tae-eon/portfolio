import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaidInLeft } from "./animation/FaidIn";
import TitleNeon from "./animation/TitleNeon";
import devflixMain from "../static/Image/portfolio/devflixMain.png";

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
`;

const Item = styled.li`
  width: 1020px;
  height: 100%;
  padding: 20px;
  background-color: black;
  border-radius: 5px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    all: unset;
    position: absolute;
    right: 0;
    top: -10px;
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
`;

export const BGBlur = css`
  filter: blur(${(props) => props.current});
`;

const PortFoilo = () => {
  const [modal, cbmodal] = useState(false);

  return (
    <>
      <Title onClick={() => cbmodal(true)}>LEE TAE EON's PORTFOLIO</Title>
      <Container current={modal === true ? "25px" : null}>
        <List>
          {modal === true ? (
            <Item>
              <button onClick={(modal) => cbmodal(false)}>❌</button>
              <img alt="" src={devflixMain} />
              <h1>DevFlix</h1>
              <p>Netflix를 clone한 site로 moviedata api를 활용하여 구현</p>
            </Item>
          ) : null}
        </List>
      </Container>
    </>
  );
};

export default PortFoilo;

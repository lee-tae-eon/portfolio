import React, { useState } from "react";
import styled, { css } from "styled-components";
import PortfolioData from "./Datas/PortfolioData";
import { GlobalTitle } from "./_Cssvariable";

const PortSection = styled.section`
  position: relative;
`;

const Title = styled.h1`
  ${GlobalTitle}
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
  align-items: center;
  margin-bottom: 50px;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    font-size: 50px;
  }
  h3 {
    width: 300px;
  }
  p {
    font-size: 20px;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1020px;
  max-height: 600px;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  backdrop-filter: blur(3px);
  button {
    all: unset;
    position: sticky;
    top: 0;
    cursor: pointer;
    /* z-index: 999; */
    font-size: 26px;
  }
  img {
    width: 100%;
    max-height: 600px;
    height: 100%;
    border-radius: 5px;

    margin-bottom: 20px;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 20px;
  }
  p {
    width: 50%;
    line-height: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  a {
    color: red;
    margin-top: 30px;
  }
`;

// const CloseButton = styled.button`
//   all: unset;
//   position: absolute;
//   right: 0;
//   top: 20px;
//   cursor: pointer;
// `;

export const BGBlur = css`
  filter: blur(${(props) => props.current});
`;

const PortFoilo = () => {
  const [devModal, cbDev] = useState(false);
  const [tubeModal, cbTube] = useState(false);
  const [cocoaModal, cbCocoa] = useState(false);
  const [autoMaskModal, cbAutoMask] = useState(false);
  const [portDatas, cbPortData] = useState(PortfolioData);

  const closeModal = () => {
    cbDev(false);
    cbTube(false);
    cbCocoa(false);
    cbAutoMask(false);
  };

  return (
    <PortSection>
      <Title>LEE TAE EON's PORTFOLIO</Title>
      <Container>
        <List>
          <Item onClick={() => cbDev(true)}>
            <h3>DEVFLIX</h3>
            <p> Click Me !!!!!</p>
          </Item>
          <Item onClick={() => cbTube(true)}>
            <h3>GyumTube</h3>
            <p> Click Me !!!!!</p>
          </Item>
          <Item onClick={() => cbCocoa(true)}>
            <h3>CocoaClone</h3>
            <p> Click Me !!!!!</p>
          </Item>
          <Item onClick={() => cbAutoMask(true)}>
            <h3>Auto Mask Checking Bot</h3>
            <p> Click Me !!!!!</p>
          </Item>
        </List>
        {devModal === true ? (
          <PortModal data={portDatas[0]} closeModal={closeModal} />
        ) : null}
        {tubeModal === true ? (
          <PortModal data={portDatas[1]} closeModal={closeModal} />
        ) : null}
        {cocoaModal === true ? (
          <PortModal data={portDatas[2]} closeModal={closeModal} />
        ) : null}
        {autoMaskModal === true ? (
          <PortModal data={portDatas[3]} closeModal={closeModal} />
        ) : null}
      </Container>
    </PortSection>
  );
};

const PortModal = ({ data, closeModal }) => (
  <>
    <Modal>
      <button onClick={closeModal}>❌</button>
      {console.log(data)}

      <img alt="" src={data.poster} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <a href={data.link.website} target="_blank" rel="noreferrer">
        사이트 : {data.link.website} &larr; Click!
      </a>
      <a href={data.link.github} target="_blank" rel="noreferrer">
        GitHub 주소 : {data.link.github} &larr; Click;
      </a>
    </Modal>
  </>
);

export default PortFoilo;

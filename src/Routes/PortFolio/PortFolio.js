import React, { useState } from "react";
import styled, { css } from "styled-components";
import PortfolioData from "../../Components/Datas/PortfolioData";
import { GlobalTitle } from "../../Components/css/_Cssvariable";
import { useTabs } from "@leehooks/use-tabs";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Item = styled.li`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  p {
    text-align: center;
    width: 50%;
    font-size: 20px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    font-size: 50px;
    p {
      font-size: 40px;
    }
  }
  h3 {
    width: 50%;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1120px;
  max-height: 760px;
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
  .use-stack {
    font-size: 22px;
    line-height: 24px;
    color: #7890ad;
  }
`;

export const BGBlur = css`
  filter: blur(${(props) => props.current});
`;

const PortFolio = () => {
  const [modal, setModal] = useState(false);
  const portDatas = useState(PortfolioData)[0];

  const closeModal = () => {
    setModal(false);
  };

  const { currentItem, changeItem } = useTabs(0, portDatas);

  return (
    <PortSection>
      <Title>LEE TAE EON's PORTFOLIO</Title>
      <Container>
        <List>
          {portDatas.map((data, index) => (
            <Item
              key={data.id}
              onClick={() => {
                setModal(true);
                return changeItem(index);
              }}
            >
              <h3>{data.title}</h3>
              <p>{data.summary}</p>
            </Item>
          ))}
        </List>
        {modal === true ? (
          <PortModal data={currentItem} closeModal={closeModal} />
        ) : null}
      </Container>
    </PortSection>
  );
};

const PortModal = ({ data, closeModal }) => (
  <>
    <Modal>
      <button onClick={closeModal}>❌</button>

      <img alt="" src={data.poster} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p className="use-stack">Stack : {data.stack}</p>
      <a href={data.link.website} target="_blank" rel="noreferrer">
        사이트 : {data.link.website} &larr; Click!
      </a>
      <a href={data.link.github} target="_blank" rel="noreferrer">
        GitHub 주소 : {data.link.github} &larr; Click;
      </a>
    </Modal>
  </>
);

export default PortFolio;

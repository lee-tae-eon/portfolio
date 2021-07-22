import React from "react";
import styled from "styled-components";
import { FaidInLeft } from "./animation/FaidIn";
import TitleNeon from "./animation/TitleNeon";

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
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PortFoilo = () => {
  return (
    <>
      <Title>LEE TAE EON's PORTFOLIO</Title>
      <Container>
        <section>
          <img alt="" src="" />
        </section>
        <section>
          <img alt="" src="" />
        </section>
        <section>
          <img alt="" src="" />
        </section>
        <section>
          <img alt="" src="" />
        </section>
      </Container>
    </>
  );
};

export default PortFoilo;

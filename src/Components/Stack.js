import React, { useState } from "react";
import styled from "styled-components";
import TitleNeon from "./animation/TitleNeon";
import { StacksInfo } from "./Stacks/StacksInfo";

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

const Container = styled.section`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  margin: auto;
  margin-top: 60px;
  margin-bottom: 50px;
  padding: 20px 40px;
  text-align: center;
`;

const StackInfo = styled.div`
  width: 400px;
  justify-self: center;
  align-self: center;
  margin-top: 50px;
  margin-bottom: 50px;
  h1 {
    font-size: 26px;
    font-weight: 700;
    margin: 20px 0;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Stack = () => {
  let [Stacks, cbStack] = useState(StacksInfo);

  return (
    <>
      <Title>LeeTaeEon's Stacks</Title>
      <Container>
        {Stacks.map((stack, index) => {
          return (
            <StackInfo key={index}>
              <div className={`stack--${stack.title}`}>
                <Logo src={stack.logo}></Logo>
              </div>
              <h1>{stack.title}</h1>
              <p>{stack.Useful}</p>
            </StackInfo>
          );
        })}
      </Container>
    </>
  );
};

export default Stack;

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
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);
  padding: 20px 40px;
  text-align: center;
  background: linear-gradient(40deg, #cdcdcb, rgba(50, 50, 50, 0.5));
`;

const StackInfo = styled.div`
  width: 400px;
  justify-self: center;
  align-self: center;
  .stack--git-github {
    border-radius: 50%;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const Stack = () => {
  let [Stacks, cbStack] = useState(StacksInfo);
  console.log(Stacks);

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

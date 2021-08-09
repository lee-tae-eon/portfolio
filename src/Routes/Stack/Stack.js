import React, { useState } from "react";
import styled from "styled-components";
import { StacksInfo } from "../../Components/Datas/StacksInfo";
import { GlobalTitle } from "../../Components/css/_Cssvariable";

const Title = styled.h1`
  ${GlobalTitle};
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
  margin-top: 50px;
  margin-bottom: 50px;
  h1 {
    font-size: 26px;
    font-weight: 700;
    margin: 20px 0;
  }
  p {
    letter-spacing: 1.2px;
    line-height: 20px;
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Stack = () => {
  const Stacks = useState(StacksInfo)[0];

  return (
    <>
      <Title>LEE TAE EON's Stacks</Title>
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

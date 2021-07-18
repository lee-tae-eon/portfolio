import Navigation from "Components/Nav";
import React from "react";
import styled from "styled-components";
import Profile from "Components/Profile";

const Container = styled.div`
  margin-top: 100px;
`;

const H1 = styled.h1`
  margin-bottom: 600px;
`;

const HomePresenter = () => {
  return (
    <Container>
      <H1>LEE</H1>
    </Container>
  );
};

export default HomePresenter;

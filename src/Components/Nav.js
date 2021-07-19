import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  height: 100px;
  margin: auto;
  font-size: 16px;
  font-weight: 800;
  position: sticky;
  top: 0;
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(70deg, #90928d, white);
  gap: 2px;
`;

const Item = styled.li`
  width: 100%;
  font-size: 24px;
  color: rgba(20, 20, 20, 0.5);
  font-weight: 800;
  text-align: center;
  &:first-child {
    font-size: 32px;
    color: black;
  }
`;

const PLink = styled(Link)``;

const Navigation = withRouter(() => {
  return (
    <Navbar>
      <List>
        <Item>
          <Link to="/">Lee-Tae-Eon</Link>
        </Item>
        <Item>
          <PLink to="/profile">PROFILE</PLink>
        </Item>
        <Item>STACK</Item>
        <Item>PORTFOLIO</Item>
        <Item>CONTACT</Item>
      </List>
    </Navbar>
  );
});

export default Navigation;

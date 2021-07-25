import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { OswaldFont } from "./_Cssvariable";

const Navbar = styled.nav`
  width: 100%;
  height: 100px;
  margin: auto;
  font-size: 16px;
  font-weight: 800;
  position: sticky;
  top: 0;
  ${OswaldFont}
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(120deg, #262926, #3a404a); */

  gap: 2px;
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  font-size: 24px;
  color: ${(props) => (props.current ? "red" : "white")};
  border-bottom: 4px solid ${(props) => (props.current ? "red" : "none")};
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PLink = styled(Link)``;

const Navigation = withRouter(({ location: { pathname } }) => {
  return (
    <Navbar>
      <List>
        <Item current={pathname === "/"}>
          <Link to="/">LEETAEEON</Link>
        </Item>
        <Item current={pathname === "/profile"}>
          <PLink to="/profile">PROFILE</PLink>
        </Item>
        <Item current={pathname === "/stack"}>
          <PLink to="/stack">STACKS</PLink>
        </Item>
        <Item current={pathname === "/portfolio"}>
          <PLink to="/portfolio">PORTFOLIO</PLink>
        </Item>
        <Item current={pathname === "/contact"}>
          <PLink to="/contact">CONTACT</PLink>
        </Item>
      </List>
    </Navbar>
  );
});

export default Navigation;

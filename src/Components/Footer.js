import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  height: 160px;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  hr {
    width: 100%;
    margin-top: -40px;
  }
  a {
    font-size: 20px;
    color: green;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <hr />
      <span>&copy; 2021 ~ {new Date().getFullYear()}</span>
      <span>CALL : 010 - 9749 - 2060</span>
      <a
        href="https://github.com/lee-tae-eon?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        GitHub{" "}
      </a>
      <a
        href="https://www.tistory.com/member/blog"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Blog{" "}
      </a>
    </Foot>
  );
};

export default Footer;

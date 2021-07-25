import React from "react";
import styled from "styled-components";
import { GlobalTitle } from "./_Cssvariable";

const Title = styled.h1`
  ${GlobalTitle}
`;

const Container = styled.div`
  padding: 20px;
  margin: 80px auto;
  display: flex;
  justify-content: flex-end;
  width: 1120px;
  height: 500px;
  background-color: rgba(60, 60, 60, 0.4);
  color: white;
  border-radius: 5px;
  position: relative;
`;

const FaceImg = styled.div`
  position: absolute;
  top: 50%;
  left: -20%;
  transform: translateY(-50%) translateX(25%);
  padding: 15px;
  width: 280px;
  height: 280px;
  /* background-color: rgba(40, 40, 40, 0.5); */
  img {
    border: 1px solid rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const MyInfo = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  font-size: 36px;
  letter-spacing: 1.2px;
  color: #7890ad;
`;

const Contact = () => {
  return (
    <>
      <Title>CONTACT ME</Title>
      <Container>
        <FaceImg>
          <img
            src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F4647533%2Fattach%2Ff0fc1e4f632643738d3ff1173c42d62a"
            alt=""
          />
        </FaceImg>
        <MyInfo>
          <h3>Lee Tae Eon : 이 태 언</h3>
          <span>Email : mktears0609@gmail.com</span>
          <span>Github : https://github.com/lee-tae-eon</span>
          <span>Blog : https://developer-lte.tistory.com/</span>
          <span>Phone : +82 10 9749 2060</span>
          <span>Kakao : ltaeeon@gmail.com</span>
        </MyInfo>
      </Container>
    </>
  );
};

export default Contact;

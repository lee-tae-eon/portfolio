import React from "react";
import styled from "styled-components";
import TitleNeon from "../../Components/animation/TitleNeon";

const Container = styled.div`
  font-size: 32px;
  max-width: 1000px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  h1 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 40px;
    animation: ${TitleNeon} 3s ease infinite;
  }
  p {
    line-height: 50px;
    letter-spacing: 2px;
    color: #c7cdd4;
    font-weight: 300;
    strong {
      font-size: 40px;
      color: #7890ad;
      font-weight: 900;
    }
  }
`;

const HomePresenter = () => {
  return (
    <Container>
      <h1>개발자 이태언은...</h1>
      <p>
        안녕하세요. <strong>Javascript FullStack 개발자</strong>를 목표로 하고
        계속 배우고 정진해 나아가고 있는 <strong>이태언</strong>입니다. 저는
        올해 37살로 늦은 나이에 개발에 재미를 느끼고 목표를 세우고 달려 나아가고
        있습니다. 어려움을 해결하는 것을 좋아하며, 새로운 기술을 배우고 갖추는
        것을 사랑합니다. 무엇보다 더 나은 더 좋은{" "}
        <strong>혁신적인 프로그래밍</strong>을 할 수 있도록 더 즐기고 더
        노력하는 사람입니다.
      </p>
    </Container>
  );
};

export default HomePresenter;

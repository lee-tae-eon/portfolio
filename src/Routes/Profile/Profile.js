import React from "react";
import styled from "styled-components";
import { GlobalTitle } from "../../Components/css/_Cssvariable";

const Title = styled.h1`
  ${GlobalTitle}
`;
const Container = styled.section`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 20px 40px;
  display: flex;
  text-align: center;
`;

const List = styled.ul`
  padding: 20px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  hr {
    width: 100%;
  }
`;

const Item = styled.li`
  display: flex;
  height: 150px;
  font-size: 22px;
  justify-content: center;
  align-items: center;
`;

const ItemTitle = styled.h3`
  width: 20%;
  font-size: 32px;
  font-weight: bold;
  margin-right: 20px;
`;

const ItemContent = styled.p`
  width: 80%;
  line-height: 30px;
  letter-spacing: 2px;
  strong {
    font-size: 26px;
    font-weight: 600;
  }
`;

const Profile = () => {
  return (
    <>
      <Title>LEE TAE EON's Profile</Title>
      <Container>
        <List>
          <Item>
            <ItemTitle>Age </ItemTitle>
            <ItemContent>
              <strong>20대같은 37세</strong> <br></br> 늦은 나이 개발을
              시작했지만 풋풋했던 20대 때 보다 더 열정가득히 즐거움을 느끼는
              개발자입니다.
            </ItemContent>
          </Item>
          <hr></hr>
          <Item>
            <ItemTitle>Education </ItemTitle>
            <ItemContent>
              어릴적 선택한 국제통상학 전공이 적성에 맞지않아 4학년 1학기 중퇴한
              상명대학교 중퇴자
            </ItemContent>
          </Item>
          <hr></hr>
          <Item>
            <ItemTitle>Career </ItemTitle>
            <ItemContent>
              developer로서의 경력은 없습니다. 배움은 직업전문학교에서 6개월
              자율주행과 인공지능을 이용한 모빌리티 과정을 수료하였습니다.
              그러나.. 배움의 깊이가 얕고 진로가 확실치 않아 가장 재미있고 즐길
              수 있는 Web developer로 진로를 정하고 Javscript로 3개월
              독학하였습니다.
            </ItemContent>
          </Item>
          <hr></hr>
          <Item>
            <ItemTitle>Goals as a developer </ItemTitle>
            <ItemContent>
              우선 누구나 인정할 수 있는 그리고 누구에게나 도움이 될 수 있는{" "}
              {""}
              <strong>Javascript Full Stack Developer</strong> 가 되는 것이
              목표입니다. 그리고 제가 일하는 곳에서{" "}
              <strong>무한한 가능성과 회사의 발전에 기여</strong> 할 수 있는
              그리고 더 나아가 유저에게 편리함과 기쁨을 줄 수 있는 개발자가 되는
              것입니다.
            </ItemContent>
          </Item>
        </List>
      </Container>
    </>
  );
};

export default Profile;

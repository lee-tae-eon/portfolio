import React, { useState } from "react";
import styled from "styled-components";
import TitleNeon from "./animation/TitleNeon";

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
  margin: auto;
  margin-top: 60px;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);
  padding: 20px 40px;
  display: flex;
  text-align: center;
  background: linear-gradient(40deg, #cdcdcb, rgba(50, 50, 50, 0.5));
`;

const Stack = () => {
  let [Stacks, cbStack] = useState([
    {
      id: 0,
      title: "HTML5",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/html5_1IJr1hb.png",
      Useful:
        "웹에 가장 기본이 되는 마크업 언어인 HTML을 적재 적소에 잘 활용하기 위해 사이드 프로젝트를 통해 작성해보고 있습니다. 또한 pug나 jinja 같은 템플릿 엔진을 사용해서 작성 가능합니다.",
    },
    {
      id: 1,
      title: "CSS3 & SCSS",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/css3.png",
      Useful:
        "여러 CSS레이아웃을 짜보며 활용해보고 있으며 개인적인 사이트를 만들거나 사이드 프로젝트시 원활히 활용이 가능합니다. 또한 SCSS를 활용하여 stylesheet작성도 가능합니다.",
    },
    {
      id: 2,
      title: "Javsscript",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/js.png",
      Useful:
        "ECMAScript6와 Vanilla Js를 활용하며 아직은 기초적인 단계이지만, 더나아가 typescript와 ",
    },
    {
      id: 3,
      title: "Node.js",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/nodeJSBadge.png",
      Userful:
        "Node.js로 Express프레임워크를 구축할 수 있으며, 현재 react와 express를 조합하는 사이드프로젝트를 계획중 입니다.",
    },
    {
      id: 4,
      title: "MongoDB",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/Pug_TAaOtzg.png",
      Useful:
        "NoSql인 MongoDB를 Mongoose를 사용해 Express로 프레임워크 구축시 활용가능합니다. 현재 진행중인 사이드프로젝트에서 지속적으로 활용하고 있습니다. ",
    },
    {
      id: 5,
      title: "React.js",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/react_nsNvyE0.png",
      Useful: "현재 axios를 활용하여 api요청",
    },
    {
      id: 6,
      title: "Express.js",
      logo: "https://media.vlpt.us/images/ruddms936/post/27d644ea-ef9c-4ace-adbc-f2ed8e158efd/express-facebook-share.png",
      Useful:
        "Restful 구조로 API를 개발할 수 있으며 MongoDB및 mongoose와 연동하여 CRUD를 구현할 수 있습니다. express-session과 cookie를 활용해 세션 형태로 사용자 인증을 구현할 수 있고 passportJS를 활용해서도 인증을 구현할 수 있습니다.",
    },
    {
      id: 7,
      title: "git & github",
      logo: "https://usingu.co.kr/wp-content/uploads/2021/04/git_scm_logo_icon_512x256.png",
      Useful:
        "제가 사용하는 모든 코드는 git을 통해 버전관리를 하고 있으며, git과 github을 활용 할 수 있습니다.",
    },
    {
      id: 8,
      title: "python",
      logo: "https://d1telmomo28umc.cloudfront.net/media/public/badges/python_l9Src2C.png",
      Useful:
        "직업전문학교를 다니며 가장 먼저 배운 언어입니다. flask를 활용해 웹을 구축해 보았고 numpy, opencv, tensorflow 라이브러리를 활용하여 프로젝트 진행을 해보았습니다.",
    },
    {
      id: 9,
      title: "AWS",
      logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      Useful:
        "사이드 프로젝트시 파일을 AWS S3 라이브러리를 연동하여 사용했습니다.",
    },
    {
      id: 9,
      title: "C",
      useful:
        "기본서를 습득하였고, 직업전문학원 프로젝트시 아두이노 코드를 작성해보았습니다. ",
    },
  ]);
  console.log(Stacks);

  return (
    <>
      <Title>Stack</Title>
      <Container>
        {Stacks.map((stack, index) => {
          return (
            <div>
              <h1>{stack[index].title}</h1>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Stack;

import devflixMain from "../../static/Image/portfolio/devflixMain.png";
import gyumtube2 from "../../static/Image/portfolio/gyumTube2.png";
import AutoMask from "../../static/Image/portfolio/AutoMask.png";
import cocoaClone from "../../static/Image/portfolio/cocoaClone.png";

const PortfolioData = [
  {
    id: 0,
    title: "DEVFLIX",
    poster: `${devflixMain}`,
    summary: "Netflix 클론 사이트",
    description:
      "react로 영화와 tv show 정보를 볼 수 있는 사이트로 class components로 작성되었고 현재는 hook을 사용해 function component 형태로 변경할 예정입니다. 데이터는 theMovieDB api 사용하였습니다. ",
    link: {
      website: "https://lee-tae-eon.github.io/devflix/#/",
      github: "https://github.com/lee-tae-eon/devflix",
    },
    stack: "react.js, axios, styled-components, react-router-dom",
  },
  {
    id: 1,
    title: "GYUMTube",
    poster: `${gyumtube2}`,
    summary: "유튜브 + 인스타그램 클론 사이트",
    description:
      "유튜브 클론 + 인스타그램 클론 사이트, 현재 진행중이며 프론트엔드 작업은 react로 변경할 예정입니다.",
    link: {
      website: "http://gyumtube.herokuapp.com/",
      github: "https://github.com/lee-tae-eon/my-first-website",
    },
    stack:
      "Node.js, Express, heroku, AWS S3, mongoDB, mongoose, Pug, ffmpeg, babel, scss, webpack",
  },
  {
    id: 2,
    title: "COCOA CLONE",
    summary: "카카오톡 레이아웃 클론",
    description:
      "웹 개발자로 결정 한 후 처음 HTML & CSS 로 만들어 본 kakao talk clone 레이아웃입니다.",
    poster: `${cocoaClone}`,
    link: {
      website: "https://lee-tae-eon.github.io/cocoaClone/",
      github: "https://github.com/lee-tae-eon/cocoaClone",
    },
    stack: "HTML5, CSS3",
  },
  {
    id: 3,
    title: "AutoMaskChecking",
    poster: `${AutoMask}`,
    summary:
      "포스트 코로나 시대에 맞춰 얼굴에 마스크 착용여부를 무인으로 확인하는 프로젝트",
    description: "AI와 camera를 활용한 마스크 체킹 봇",
    link: {
      website: "https://www.youtube.com/watch?v=DUk0Vz5xePg",
      github: "https://github.com/lee-tae-eon/AI-AutoCheckingBot",
    },
    stack:
      "Window10, Ubuntu18.04, Ros, Python, C, C++, Lidar, WebCam, OpenCV, TensorFlow-Keras, web-scrapping",
  },
];

export default PortfolioData;

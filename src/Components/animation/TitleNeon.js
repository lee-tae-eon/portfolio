import { keyframes } from "styled-components";

const TitleNeon = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 1.1vw #1041FF, 0 0 10vw #1041FF, 0 0 5vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 .5vw #082180, 0 0 5vw #082180, 0 0 2vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
`;

export default TitleNeon;

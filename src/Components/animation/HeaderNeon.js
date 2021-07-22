import { keyframes } from "styled-components";

const HeaderNeon = keyframes`
0%,
100% {
 text-shadow: 0 0 1vw black, 0 0 3vw black, 0 0 10vw black, 0 0 10vw black, 0 0 .4vw black, .5vw .5vw .1vw #806914;
 color: black;
}
50% {
 text-shadow: 0 0 .5vw #1e1e1f, 0 0 1.5vw #1e1e1f, 0 0 5vw #1e1e1f, 0 0 5vw #1e1e1f, 0 0 .2vw 1e1e1f, .5vw .5vw .1vw #40340A;
 color: #aeaeb5;
}
`;

export default HeaderNeon;

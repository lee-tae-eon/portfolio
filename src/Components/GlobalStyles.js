import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    height: 1000vh;
  }
  #root {
    height: 1000vh;
  }
`;

export default GlobalStyles;

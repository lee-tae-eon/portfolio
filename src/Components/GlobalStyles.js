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
    font-family: 'Mukta', sans-serif;;
    font-size: 16px;
    background-color: #EAEAE9;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BgColor } from "./_Cssvariable";

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
    ${BgColor}
    font-family: 'Mukta', sans-serif;;
    font-size: 16px;
    color: white;
  }
`;

export default GlobalStyles;

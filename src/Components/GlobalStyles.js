import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { BgColor, OswaldFont } from "./_Cssvariable";

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
    ${OswaldFont}
    font-size: 16px;
    color: white;
  }
`;

export default GlobalStyles;

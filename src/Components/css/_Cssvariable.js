import { css } from "styled-components";
import TitleNeon from "../animation/TitleNeon";

export const OswaldFont = css`
  font-family: "Oswald", sans-serif;
`;

export const BgColor = css`
  background-color: #131313;
`;

export const GlobalTitle = css`
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

import React from "react";
import GlobalStyles from "./GlobalStyles";
import Hrouter from "./Router";
import { BGBlur } from "./PortFoilo";

const App = () => {
  return (
    <>
      <Hrouter />
      <GlobalStyles BGBlur={BGBlur} />
    </>
  );
};

export default App;

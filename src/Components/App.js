import React from "react";
import GlobalStyles from "./GlobalStyles";
import Hrouter from "./Router";
import { BGBlur } from "../Routes/PortFolio/PortFolio";

const App = () => {
  return (
    <>
      <Hrouter />
      <GlobalStyles BGBlur={BGBlur} />
    </>
  );
};

export default App;

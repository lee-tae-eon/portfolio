import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Profile from "./Profile";
import Header from "./Header";
import Navigation from "./Nav";
import Stack from "./Stack";

const Hrouter = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/stack" component={Stack}></Route>
        <Route path="/portfolio"></Route>
        <Route path="/contact"></Route>
      </Switch>
    </Router>
  );
};

export default Hrouter;

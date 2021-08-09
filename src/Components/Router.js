import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Profile from "./Profile";
import Header from "./Header";
import Navigation from "./Nav";
import Stack from "./Stack";
import PortFoilo from "./PortFoilo";
import Contact from "./Contact";
import Footer from "./Footer";

const Hrouter = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/stack" component={Stack}></Route>
        <Route path="/portfolio" component={PortFoilo}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Hrouter;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, Route, Switch } from "wouter";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/stock/:company">
          {(params) => <Stock id={parseInt(params.company)} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

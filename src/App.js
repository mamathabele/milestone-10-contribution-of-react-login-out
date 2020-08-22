import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pay1 from "./components/pay1";
import pay2 from "./components/pay2";

import { BrowserRouter, Route } from "react-router-dom";
//import Navigation from "./components/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes />
      {/* <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={pay1} />
        </BrowserRouter>
        <pay1 />
      </header> */}
    </div>
  );
}

export default App;

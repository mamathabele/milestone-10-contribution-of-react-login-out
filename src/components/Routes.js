import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
import history from "./history";
import pay1 from "./pay1";
import pay2 from "./pay2";
import pay3 from "./pay3";
import pay4 from "./pay4";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={pay1} />
          <Route path="/pay2" component={pay2} />
          <Route path="/pay3" component={pay3} />
          <Route path="/pay4" component={pay4} />
          {/* <Route path="/Contact" component={Contact} />
          <Route path="/Products" component={Products} /> */}
        </Switch>
      </Router>
    );
  }
}

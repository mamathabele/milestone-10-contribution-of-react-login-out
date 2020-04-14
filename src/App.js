import React from "react";
import Home from "./Home";
import Signin from "./Signin";
import About from "./About";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged) {
          return <Component />;
        } else {
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

class App extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChangeText = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={Home} />
          <PrivateRoute
            component={About}
            path="/about"
            isLogged={this.props.isLogged}
            exact
          />
          <PrivateRoute
            component={Cart}
            path="/cart"
            isLogged={this.props.isLogged}
            exact
          />
          <Route
            exact
            path="/signin"
            // component={Signin}
            render={(props) => {
              return (
                <Signin
                  {...props}
                  username={this.state.username}
                  password={this.state.password}
                  handleChangePassword={this.handleChangePassword}
                  handleChangeText={this.handleChangeText}
                />
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App);

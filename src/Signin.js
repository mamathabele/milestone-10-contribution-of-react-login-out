import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Signin extends React.Component {
  handleSignin = () => {
    const dispatch = this.props.dispatch;
    const { username, password } = this.props;
    // const { dispatch } = this.props;
    const action = {
      type: "SIGNIN_SUCCESS",
    };
    if (username === "demo" && password === "demo") {
      dispatch(action);
    }
  };

  render() {
    if (this.props.isLogged === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <input type="text" onChange={this.props.handleChangeText} />
        <input type="password" onChange={this.props.handleChangePassword} />
        <button onClick={this.handleSignin}>Signin..!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("State", state);
  return state;
}

// const result = connect(mapStateToProps);

// export default result(Signin);

export default connect(mapStateToProps)(Signin);

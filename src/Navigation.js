import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Navigation(props) {
  const handleSignOut = (e) => {
    const dispatch = props.dispatch;
    const action = {
      type: "SIGNOUT_SUCCESS",
    };
    dispatch(action);
  };

  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
        <Link to="cart">
          <li>Cart</li>
        </Link>
        {props.isLogged === true ? (
          <button onClick={handleSignOut}>Signout</button>
        ) : (
          <Link to="/signin">
            <li>Signin</li>
          </Link>
        )}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Navigation);

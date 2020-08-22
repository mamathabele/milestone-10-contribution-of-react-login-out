import React, { Component } from "react";
import "./pay1.css";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import tomato from "../images/tomato.png";
import logo from "../images/logo-01.webp";
import rupe from "../images/rupe.png";
import pay2 from "./pay2";
import history from "./history";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach((val) => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

export default class pay1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      number: "",
      formerrors: {
        username: "",
        number: "",
      },
    };
  }
  valid() {
    if (!this.state.number.length < 0 && this.state.username.length < 3) {
      this.setState({
        usernameError: "Invalid name",
        numberError: "Enter amount",
      });
    }
  }

  handleSubmit = (e) => {
    if (this.state.number.length !== 0 && this.state.username.length > 3) {
      this.props.history.push("/pay2");

      localStorage.setItem("username", this.state.username);
      localStorage.setItem("number", this.state.number);
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="content">
        <header>
          <div className="headbox">
            <Row>
              <Col span={18} push={6}>
                <p className="title">Paying to Exposys Data Labs</p>
              </Col>
              <Col span={6} pull={18}>
                <img src={tomato} className="imge" />
              </Col>
            </Row>
          </div>
        </header>
        <div className="form1">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            //onFinish={onFinish}
            onSubmit={this.handleSubmit}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter purpose",
                },
              ]}
            >
              <Input
                name="username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Purpose of payment"
                className="form2"
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please add amount!",
                },
              ]}
            >
              <Input
                name="number"
                prefix={
                  <img
                    src={rupe}
                    className="rupe"
                    className="site-form-item-icon"
                    style={{ width: 10, height: 10 }}
                  />
                }
                type="number"
                placeholder="Amount"
                className="form22"
                onChange={this.onChange}
              />
            </Form.Item>
            {/* {this.state.username}
            {this.state.number} */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                //onClick={() => history.push("/Pay2")}
                onClick={() => this.handleSubmit()}
                style={{
                  backgroundColor: "hsla(148, 69%, 50%, 0.959)",
                  borderColor: "hsla(148, 69%, 50%, 0.959)",
                }}
              >
                Pay
              </Button>
            </Form.Item>
          </Form>
        </div>
        <span>
          <p className="pwrd">
            Powered by <img src={logo} className="imge1" />
          </p>
        </span>
      </div>
    );
  }
}

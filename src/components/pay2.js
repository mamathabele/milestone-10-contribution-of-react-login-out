import React, { Component } from "react";
import "./pay2.css";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import "antd/dist/antd.css";
import tomato from "../images/tomato.png";
import tomat from "../images/india.png";
import logo from "../images/logo-01.webp";
import pay1 from "./pay1";
import rupe from "../images/rupe.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Option } = Select;

export default class pay2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      number: "",
      formerrors: {
        username: "",
        email: "",
        number: "",
      },
    };
  }
  valid() {
    if (!this.state.number.length < 0 && this.state.username.length < 3) {
      this.setState({
        usernameError: "Invalid name",
        phoneError: "Enter number",
      });
    }
  }
  handleSubmit = (e) => {
    // e.preventDefault();
    if (this.state.number.length !== 0 && this.state.username.length > 3) {
      this.props.history.push("/pay3");
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("phone", this.state.phone);
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
          <div>
            <Row className="row1">
              <Col span={6} pull={18}>
                <p className="title1">Purpose of Payment</p>
              </Col>
              <Col span={18} push={6}>
                <Link
                  to="/"
                  style={{ color: "blue", marginTop: 5 }}
                  activeStyle={{ color: "red" }}
                >
                  Change
                </Link>
              </Col>
            </Row>
            <p className="input1">{localStorage.getItem("username")} </p>
            <Row>
              <Col span={6} pull={18}>
                <p className="title2">Amount</p>
              </Col>
              <Col span={18} push={6}>
                <img
                  src={rupe}
                  //className="rupe"
                  className="site-form-item-icon"
                  style={{ width: 10, height: 12 }}
                />

                <p className="input2">{localStorage.getItem("number")} </p>
              </Col>
            </Row>
          </div>
          {/* {localStorage.getItem("username")}
          {localStorage.getItem("number")} */}
          <div>
            <p className="breadcrump">Your details / Payment</p>
          </div>

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
                  message: "Please Enter valid Name",
                },
              ]}
            >
              <Input
                name="username"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Name"
                className="form2"
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter Valid Email!",
                },
              ]}
            >
              <Input
                name="email"
                prefix={<MailOutlined></MailOutlined>}
                type="email"
                placeholder="Email"
                className="form22"
                onChange={this.onChange}
              />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please Enter Phone Number",
                },
              ]}
            >
              <Input
                name="number"
                prefix={<PhoneOutlined></PhoneOutlined>}
                type="number"
                placeholder="Phone Number"
                className="form22"
                onChange={this.onChange}
              />
            </Form.Item>
            {/* {this.state.username}
            {this.state.number} */}
            <Row>
              <Col span={6} pull={18}>
                <p className="title2">Amount</p>
              </Col>
              <Col span={18} push={6}>
                <img
                  src={rupe}
                  //className="rupe"
                  className="site-form-item-icon"
                  style={{ width: 10, height: 12 }}
                />

                <p className="input2">{localStorage.getItem("number")} </p>
              </Col>
            </Row>

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
                Next
              </Button>
            </Form.Item>
          </Form>

          {/* <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onSubmit={this.handleSubmit}
          >
            <label className="nam">Name</label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input className="enter" onChange={this.onChange} />
            </Form.Item>
            <label className="nam2">Email</label>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input className="enter" onChange={this.onChange} />
            </Form.Item>
            <label className="nam3">Phone Number</label>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input className="enter" onChange={this.onChange} />
            </Form.Item>
          </Form>
          <Row>
            <Col span={6} pull={18}>
              <p className="title2">Amount</p>
            </Col>
            <Col span={18} push={6}>
              <img
                src={rupe}
                //className="rupe"
                className="site-form-item-icon"
                style={{ width: 10, height: 12 }}
              />
              <p className="input2">{localStorage.getItem("number")} </p>
            </Col>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button1"
              onClick={() => this.handleSubmit()}
              style={{
                backgroundColor: "hsla(148, 69%, 50%, 0.959)",
                borderColor: "hsla(148, 69%, 50%, 0.959)",
              }}
            >
              Next
            </Button>
          </Form.Item>*/}
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

import React, { Component } from "react";
import "./pay4.css";
import { Row, Col, Form, Input, Button, Select, Checkbox } from "antd";
import "antd/dist/antd.css";
import tomato from "../images/tomato.png";
import paytm from "../images/paytm.webp";
import bhim from "../images/bhim.png";
import gpay from "../images/gpay.png";
import phone from "../images/phone-pe.png";
import card from "../images/credit.png";
import wallet from "../images/wallet.png";
import paylater from "../images/paylater.jpg";
import bank from "../images/bank.png";
import payment from "../images/payment-icon.png";

import logo from "../images/logo-01.webp";

import rupe from "../images/rupe.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  WalletTwoTone,
  BankTwoTone,
  CreditCardTwoTone,
  MoneyCollectTwoTone,
} from "@ant-design/icons";

const { Option } = Select;

export default class pay3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      number: "",
      num2: 21.32,
    };
  }
  handleSubmit = (e) => {
    this.props.history.push("/pay4");
  };
  addAction = (event) => {
    let x = this.state.number + this.state.num2;
    this.setState({ result: x });
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
            <Row>
              <Col span={6} pull={18}>
                <p className="title3">convenience fee</p>
              </Col>
              <Col span={18} push={6}>
                <img
                  src={rupe}
                  //className="rupe"
                  className="site-form-item-icon"
                  style={{ width: 10, height: 12 }}
                />

                <p className="input2">21.32 </p>
              </Col>
            </Row>
            <Row>
              <Col span={6} pull={18}>
                <h5 className="title2">Total</h5>
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
            <div>
              <p className="breadcrump1">Payment</p>
            </div>
            <Row className="row1">
              <Col span={6} pull={18}>
                <p className="titleu">UPI</p>
              </Col>
              <Col span={18} push={6}>
                <Link
                  to="/pay3"
                  style={{ color: "blue", marginTop: 5 }}
                  activeStyle={{ color: "red" }}
                >
                  Change
                </Link>
              </Col>
            </Row>
            <Row>
              <Col span={6} pull={18}>
                <h5 className="title41">Select Your UPI App</h5>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className="box" style={{ marginTop: 10 }}>
                  <Row style={{ justifyContent: "center" }}>
                    <Link
                      to="/"
                      style={{ color: "#0d86e9" }}
                      activeStyle={{ color: "red" }}
                    >
                      <img src={bhim} className="imge3" />
                    </Link>
                  </Row>
                </div>
              </Col>
              <Col span={12}>
                <div className="box" style={{ marginTop: 10 }}>
                  <Row style={{ justifyContent: "center" }}>
                    <Link
                      to="/"
                      style={{ color: "#0d86e9" }}
                      activeStyle={{ color: "red" }}
                    >
                      <img src={phone} className="imge2" />
                    </Link>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div className="box" style={{ marginTop: 10 }}>
                  <Row style={{ justifyContent: "center" }}>
                    <Link
                      to="/"
                      style={{ color: "#0d86e9" }}
                      activeStyle={{ color: "red" }}
                    >
                      <img src={gpay} className="imge2" />
                    </Link>
                  </Row>
                </div>
              </Col>
              <Col span={12}>
                <div className="box" style={{ marginTop: 10 }}>
                  <Row style={{ justifyContent: "center" }}>
                    <Link
                      to="/"
                      style={{ color: "#0d86e9" }}
                      activeStyle={{ color: "red" }}
                    >
                      <img src={paytm} className="imge2" />
                    </Link>
                  </Row>
                </div>
              </Col>
            </Row>
            <div className="box" style={{ marginTop: 10 }}>
              <Row style={{ justifyContent: "center" }}>
                <Link
                  to="/"
                  style={{ color: "#0d86e9" }}
                  activeStyle={{ color: "red" }}
                >
                  OTHER UPI APPS
                </Link>
              </Row>
            </div>
            <br></br>
            <Link
              to="/pay3"
              style={{ color: "#0d86e9", marginTop: 5, marginRight: 200 }}
              activeStyle={{ color: "red" }}
            >
              How to Pay Using UPI ?
            </Link>
            <div style={{ marginTop: 10 }}>
              <img src={payment} className="bicon" />
            </div>
          </div>
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

import React, { Component } from "react";
import { Row, Col, Form, Input, Alert } from "antd";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import login from "../../redux/actions/user/Login";
import CustomButton from "../../components/common/Button/button.jsx";

import "./authentication.scss";

class SignIn extends Component {
  state = {
    errors: [],
    loading: false,
    message: "",
  };

  static getDerivedStateFromProps = (props) => {
    return {
      message: props?.message,
      errors: props?.errors,
    };
  };

  render() {
    const { loading, profile } = this.props;
    const { errors } = this.state;

    const onFinish = (values) => {
      const { login } = this.props;
      login(values);
    };

    return (
      <div className="authentication">
        {!loading && Object.keys(profile).length ? (
          <Redirect to={"/books"} />
        ) : (
          ""
        )}
        <Row justify="center">
          <Col span={4} />

          <Col span={8}>
            <div className="sign-container">
              <div className="auth-card">
                <p className="text-signin">Sign In</p>

                <span className="label-style">Email</span>
                <Form onFinish={onFinish}>
                  <Form.Item name="email" rules={[{ required: true }]}>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>

                  <span className="label-style">Password</span>
                  <Form.Item
                    // labelCol={{ span: 24 }}
                    // label="Password"
                    name="password"
                    rules={[{ required: true }]}
                  >
                    <Input.Password
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>

                  {errors?.length ? (
                    <Alert
                      className="alert-padding"
                      description={errors}
                      type="error"
                      closable
                      showIcon
                    />
                  ) : (
                    ""
                  )}

                  <Form.Item>
                    <div className="color-link">
                      <CustomButton
                        htmlType="submit"
                        className="width-btn"
                        loading={loading}
                      >
                        SIGN IN
                      </CustomButton>
                    </div>
                    <Row>
                      <Col>
                        <div className="text-right">
                          <Link className="" to="/forgot-password">
                            <span className="checkbox-style">
                              Forgot Password
                            </span>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>

          <Col span={4} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({
  user: {
    login: { errors, message, loading },
    profile,
  },
}) => ({
  errors,
  message,
  loading,
  profile,
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

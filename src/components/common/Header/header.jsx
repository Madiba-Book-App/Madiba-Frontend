import React from "react";
import { Layout, Row, Col, Avatar, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import "./header.scss";

const { Header } = Layout;

const Navbar = ({ profile }) => {
  const logoutUser = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={() => logoutUser()}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Header
        className="header-fixed"
        style={{
          padding: 0,
          backgroundColor: "#fff",
          zIndex: 1,
          height: "80px",
        }}
      >
        <Row>
          <Col md={13} />

          <Col md={11}>
            <div className="profile-float">
              <Avatar
                className="avatar-img"
                size={35}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />

              <Dropdown overlay={menu}>
                <button
                  className="profile-container"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="profile_name">{profile.names}</span>{" "}
                  <DownOutlined className="outline-color" />
                </button>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={21}></Col>
        </Row>
      </Header>
    </div>
  );
};

const mapStateToProps = ({ user: { profile } }) => ({
  profile,
});

export default connect(mapStateToProps)(Navbar);

import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import Sidebar from "components/common/Sidebar/sidebar.jsx";
import Navbar from "components/common/Header/header.jsx";
import ViewBooks from "components/dashboard/book/view";
import CreateBook from "components/dashboard/book/createBook";
import EditBookComponent from "components/dashboard/book/editBook";

import "./dashboard.scss";

const Dashboard = ({ match }) => {
  const { path } = match;

  return (
    <div className="dashboard">
      <Navbar />

      <div className="bg-color">
        <Row>
          <Col span={3}>
            <Sidebar />
          </Col>
          <Col span={21}>
            <div className="container-right">
              {path === "/books" ? (
                <ViewBooks />
              ) : path === "/create-book" ? (
                <CreateBook />
              ) : path === "/book/:id" ? (
                <EditBookComponent />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </div>
      <div className="profile-container"></div>
    </div>
  );
};

const mapStateToProps = ({ user: { profile } }) => ({
  profile,
});

export default connect(mapStateToProps)(Dashboard);

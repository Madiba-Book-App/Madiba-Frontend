import React from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

import Sidebar from "components/common/Sidebar/sidebar.jsx";
import Navbar from "components/common/Header/header.jsx";
import ViewBooks from "components/dashboard/book/view";
import ViewEvent from "components/dashboard/event/listEvents";
import CreateBook from "components/dashboard/book/createBook";
import CreateEvent from "components/dashboard/event/createEvent";
import EditBookComponent from "components/dashboard/book/editBook";
import ViewUsers from "components/dashboard/users/view";
import EditEventComponent from "components/dashboard/event/editEvent";

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
              ) : path === "/users" ? (
                <ViewUsers />
              ) : path === "/events" ? (
                <ViewEvent />
              ) : path === "/create-event" ? (
                <CreateEvent />
              ) : path === "/event/:id" ? (
                <EditEventComponent />
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

import React, { Component } from "react";
import { Row, Col, Spin, Card, Popconfirm, message } from "antd";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";
import moment from "moment";

import CustomButton from "../../common/Button/button.jsx";
import GetEvents from "redux/actions/event/getAll";
import deleteEvent from "redux/actions/event/delete";
import clearEventstore from "redux/actions/event/clearStore";

import "./event.scss";

class ListEvent extends Component {
  state = {
    listOfEvents: [],
    loading: false,
    errors: {},
    messageDelete: "",
    loadingDelete: false,
  };

  componentDidMount() {
    const { GetEvents } = this.props;
    GetEvents();
  }

  static getDerivedStateFromProps(props) {
    return {
      listOfEvents: props.getlistOfEvents.events,
      messageDelete: props?.messageDelete,
      loadingDelete: props?.loadingDelete,
      loading: props?.loading,
      errors: props?.errors,
    };
  }
  confirm(e) {
    const { deleteEvent } = this.props;
    deleteEvent(e);
  }

  componentDidUpdate() {
    const { GetEvents, clearEventstore } = this.props;
    if (this.state.messageDelete) {
      message.success(this.state.messageDelete, 3);
      setTimeout(() => {
        GetEvents();
        // eslint-disable-next-line no-restricted-globals
      }, 2000);
      clearEventstore();
    }
  }

  render() {
    const { loading, listOfEvents, loadingDelete } = this.state;

    return (
      <div className="books">
        <Row>
          <Col span={8}>
            <div className="div-create">
              <Link to="/create-event">
                <CustomButton htmlType="submit" className="width-btn">
                  CREATE
                </CustomButton>
              </Link>
            </div>
          </Col>
          <Col span={8} offset={7}>
            <div className="button-right"></div>
          </Col>
        </Row>
        <br />
        <br />

        {loading ? (
          <div className="example">
            <Spin />
          </div>
        ) : listOfEvents === undefined ? (
          <p className="text-centered">No Events available, please create</p>
        ) : (
          <Row>
            {listOfEvents?.map((event) => {
              return (
                <Col key={event.id} span={6}>
                  <Card
                    hoverable
                    style={{
                      width: 300,
                      marginBottom: 25,
                    }}
                    cover={
                      <img
                        style={{ width: "100%", height: "250px" }}
                        alt="example"
                        src={event?.eventImage}
                      />
                    }
                    actions={[
                      <Link to={`/event/${event.id}`}>
                        <CustomButton
                          htmlType="submit"
                          className="width-btn-update"
                        >
                          Update
                        </CustomButton>
                      </Link>,
                      <Popconfirm
                        title="Are you sure you want to delete this event?"
                        onConfirm={() => this.confirm(event.id)}
                        okButtonProps={{ loading: loadingDelete }}
                        okText="Yes"
                      >
                        <CustomButton
                          htmlType="submit"
                          className="width-btn-delete"
                        >
                          Delete
                        </CustomButton>
                      </Popconfirm>,
                    ]}
                  >
                    <p>
                      title:{" "}
                      <span className="event-details">{event?.title}</span>
                    </p>
                    <p>
                      description:{" "}
                      <span className="event-details">
                        {event?.description}
                      </span>
                    </p>
                    <p>
                      Location:{" "}
                      <span className="event-details">{event?.location}</span>
                    </p>
                    <p>
                      price:{" "}
                      <span className="event-details">{event.price}</span>
                    </p>

                    <p>
                      places:{" "}
                      <span className="event-details">{event.places}</span>
                    </p>

                    <p>
                      price:{" "}
                      <span className="event-details">{event?.price}</span>
                    </p>
                    <p>
                      time: <span className="event-details">{event?.time}</span>
                    </p>
                    <p>
                      Date:{" "}
                      <span className="event-details">
                        {moment(event?.date).format("MMM Do YYYY")}
                      </span>
                    </p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  event: {
    getlistOfEvents,
    getEvents: { errors, message, loading },
    deleteEvent: { loading: loadingDelete, message: messageDelete },
  },
}) => ({
  getlistOfEvents,
  errors,
  message,
  loading,
  loadingDelete,
  messageDelete,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { GetEvents, deleteEvent, clearEventstore })
)(ListEvent);

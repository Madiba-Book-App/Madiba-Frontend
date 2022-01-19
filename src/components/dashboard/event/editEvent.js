import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Upload,
  Alert,
  message,
  TimePicker,
  Image,
  Spin,
  DatePicker,
} from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import moment from "moment";

import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { EditEvent } from "redux/actions/event/update";
import getOne from "redux/actions/event/getOne";
import CustomButton from "../../common/Button/button.jsx";
import clearEventstore from "redux/actions/event/clearStore";
import "./event.scss";

const dateFormat = "YYYY/MM/DD";

class EditEventComponent extends Component {
  state = {
    eventImage: "",
    event: [],
    loading: false,
    loadingEvent: false,
    message: "",
    errors: [],
    time: "",
    date: "",
  };

  componentDidMount() {
    const { getOne } = this.props;
    getOne(this.props.match.params.id);
  }

  componentWillUnmount = () => {
    const { clearEventstore } = this.props;
    clearEventstore();
  };

  onChange = (_, timeString) => {
    this.setState(() => ({
      time: timeString,
    }));
  };

  onChangeDate = (data) => {
    this.setState({ date: new Date(data) });
  };

  static getDerivedStateFromProps(props) {
    return {
      event: props?.getOneEvent.event,
      loadingEvent: props?.loadingEvent,
      loading: props?.loading,
      message: props?.message,
      errors: props?.errors,
    };
  }

  componentDidUpdate() {
    if (this.state.message) {
      message.success(this.state.message, 3);
      setTimeout(() => {
        this.props.history.push("/events");
        // eslint-disable-next-line no-restricted-globals
      }, 3000);
    }
  }

  render() {
    const { loading, errors, event, loadingBook, time, date } = this.state;

    const onFinish = (values) => {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("location", values.location);
      formData.append("description", values.description);
      formData.append("time", time);
      formData.append("price", values.price);
      formData.append("places", values.places);
      formData.append(
        "date",
        date
          ? moment(date).format("YYYY-MM-DD")
          : moment(event?.date).format("YYYY-MM-DD")
      );
      formData.append("eventImage", this.state.eventImage);

      //   for (let data of formData.entries()) {
      //     console.log(`Event ====>>>", ${data[0]},${data[1]}`);
      //   }

      const { EditEvent } = this.props;

      EditEvent(formData, this.props.match.params.id);
    };
    return (
      <div className="books">
        <Link to="/events">
          <ArrowLeftOutlined /> Back
        </Link>
        <Row justify="center">
          <Col span={4} />

          <Col span={8}>
            {loadingBook ? (
              <div className="example">
                <Spin />
              </div>
            ) : (
              <>
                <Image src={event?.eventImage} />
                <div className="sign-container">
                  <div className="auth-card">
                    <span className="label-style">Title</span>

                    <Form onFinish={onFinish}>
                      <Form.Item
                        name="title"
                        initialValue={event?.title}
                        rules={[{ required: true }]}
                      >
                        <Input
                          name="title"
                          values={event?.title}
                          type="text"
                          placeholder="Title"
                          className="input-style"
                          onChange={this.handleChange}
                        />
                      </Form.Item>
                      <span className="label-style">Location</span>
                      <Form.Item
                        // labelCol={{ span: 24 }}
                        // label="Password"
                        name="location"
                        initialValue={event?.location}
                        rules={[{ required: true }]}
                      >
                        <Input
                          name="location"
                          type="text"
                          placeholder="Location"
                          className="input-style"
                          onChange={this.handleChange}
                        />
                      </Form.Item>
                      <span className="label-style">Time</span>
                      <TimePicker
                        onChange={this.onChange}
                        defaultValue={moment(event?.time, "HH:mm:ss")}
                      />
                      <br />
                      <br />
                      <span className="label-style">Price</span>
                      <Form.Item
                        name="price"
                        initialValue={event?.price}
                        rules={[{ required: true }]}
                      >
                        <Input
                          name="price"
                          type="text"
                          placeholder="Price"
                          className="input-style"
                          onChange={this.handleChange}
                        />
                      </Form.Item>
                      <span className="label-style">Available seats</span>
                      <Form.Item
                        name="places"
                        initialValue={event?.places}
                        rules={[{ required: true }]}
                      >
                        <Input
                          name="places"
                          type="text"
                          placeholder="Places"
                          className="input-style"
                          onChange={this.handleChange}
                        />
                      </Form.Item>
                      <span className="label-style">Date</span>
                      <DatePicker
                        defaultValue={moment(event?.date, dateFormat)}
                        format={dateFormat}
                        className="date-picker"
                        onChange={this.onChangeDate}
                      />
                      <br />
                      <br />
                      <Form.Item
                        name="description"
                        initialValue={event?.description}
                        rules={[{ required: true }]}
                      >
                        <Input.TextArea placeholder="description" />
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
                      )}{" "}
                      <Form.Item>
                        <Upload
                          beforeUpload={(file) => {
                            const reader = new FileReader();

                            reader.onload = () => {
                              console.log();
                            };
                            reader.readAsText(file);

                            // Prevent upload
                            return false;
                          }}
                          onChange={({ fileList: newFileList }) =>
                            this.setState({
                              eventImage: newFileList[0]?.originFileObj,
                            })
                          }
                        >
                          <Button icon={<UploadOutlined />}>
                            Add Event Image
                          </Button>
                        </Upload>
                      </Form.Item>
                      <Form.Item>
                        <div className="color-link">
                          <CustomButton
                            htmlType="submit"
                            className="width-btn"
                            loading={loading}
                          >
                            Edit
                          </CustomButton>
                        </div>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </>
            )}
          </Col>

          <Col span={4} />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({
  event: {
    editEvent: { errors, message, loading },
    getEvent: { loading: loadingEvent },
    getOneEvent,
  },
}) => ({
  loadingEvent,
  getOneEvent,
  loading,
  errors,
  message,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { EditEvent, getOne, clearEventstore })
)(EditEventComponent);

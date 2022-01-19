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
  DatePicker,
} from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import moment from "moment";

import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { CreateEvents } from "redux/actions/event/create";
import CustomButton from "../../common/Button/button.jsx";
import clearEventstore from "redux/actions/event/clearStore";
import "./event.scss";

const dateFormat = "YYYY/MM/DD";

class CreateEvent extends Component {
  state = {
    eventImage: "",
    book: "",
    loading: false,
    time: "",
    message: "",
    errors: [],
  };

  static getDerivedStateFromProps(props) {
    return {
      loading: props?.loading,
      message: props?.message,
      errors: props?.errors,
    };
  }

  onChange = (_, timeString) => {
    this.setState(() => ({
      time: timeString,
    }));
  };

  componentDidUpdate() {
    const { clearEventstore } = this.props;
    if (this.state.message) {
      message.success(this.state.message, 3);
      setTimeout(() => {
        this.props.history.push("/events");
        // eslint-disable-next-line no-restricted-globals
      }, 3000);
      clearEventstore();
    }
  }

  render() {
    const { loading, errors, time } = this.state;

    const onFinish = (values) => {
      const getDate = new Date(values.date);
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("time", time);
      formData.append("description", values.description);
      formData.append("location", values.location);
      formData.append("price", values.price);
      formData.append("places", values.places);
      formData.append("date", moment(getDate).format("YYYY-MM-DD"));
      formData.append("eventImage", this.state.eventImage);

      //   for (let data of formData.entries()) {
      //     console.log(`Book ====>>>", ${data[0]},${data[1]}`);
      //   }

      const { CreateEvents } = this.props;
      CreateEvents(formData);
    };
    return (
      <div className="books">
        <Link to="/events">
          <ArrowLeftOutlined /> Back
        </Link>
        <Row justify="center">
          <Col span={4} />

          <Col span={8}>
            <div className="sign-container">
              <div className="auth-card">
                <span className="label-style">Title</span>
                <Form onFinish={onFinish}>
                  <Form.Item name="title" rules={[{ required: true }]}>
                    <Input
                      name="title"
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
                    rules={[{ required: true }]}
                  >
                    <Input
                      name="location"
                      type="location"
                      placeholder="Location"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                  <span className="label-style">Time</span>
                  <TimePicker
                    onChange={this.onChange}
                    defaultValue={moment("00:00:00", "HH:mm:ss")}
                  />
                  <br />
                  <br />
                  <span className="label-style">Price</span>
                  <Form.Item name="price" rules={[{ required: true }]}>
                    <Input
                      name="price"
                      type="text"
                      placeholder="Price"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                  <span className="label-style">Available Seats</span>
                  <Form.Item name="places" rules={[{ required: true }]}>
                    <Input
                      name="places"
                      type="text"
                      placeholder="Number of Place"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                  <span className="label-style">Date</span>
                  <Form.Item name="date">
                    <DatePicker
                      initialValues={moment()}
                      format={dateFormat}
                      className="date-picker"
                    />
                  </Form.Item>
                  <span className="label-style">Description</span>
                  <Form.Item name="description" rules={[{ required: true }]}>
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
                      <Button icon={<UploadOutlined />}>Add Event Image</Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item>
                    <div className="color-link">
                      <CustomButton
                        htmlType="submit"
                        className="width-btn"
                        loading={loading}
                      >
                        CREATE
                      </CustomButton>
                    </div>
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
  event: {
    createEvent: { errors, message, loading },
  },
}) => ({
  loading,
  errors,
  message,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { CreateEvents, clearEventstore })
)(CreateEvent);

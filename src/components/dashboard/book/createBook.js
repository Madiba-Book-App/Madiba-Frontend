import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Upload,
  Alert,
  message,
} from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";

import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { CreateBooks } from "redux/actions/book/Create";
import GetGenres from "redux/actions/genre/Get";
import CustomButton from "../../common/Button/button.jsx";
import "./books.scss";

const { Option } = Select;

class CreateBook extends Component {
  state = {
    bookImage: "",
    book: "",
    loading: false,
    genres: [],
    message: "",
    errors: [],
  };

  componentDidMount() {
    const { GetGenres } = this.props;
    GetGenres();
  }

  static getDerivedStateFromProps(props) {
    return {
      genres: props?.getlistOfGenres.genre,
      loading: props?.loading,
      message: props?.message,
      errors: props?.errors,
    };
  }

  componentDidUpdate() {
    if (this.state.message) {
      message.success(this.state.message, 3);
      setTimeout(() => {
        this.props.history.push("/books");
        // eslint-disable-next-line no-restricted-globals
      }, 3000);
    }
  }

  render() {
    const { genres, loading, errors } = this.state;

    const onFinish = (values) => {
      const formData = new FormData();

      formData.append("title", values.title);
      formData.append("language", values.language);
      formData.append("description", values.description);
      formData.append("author", values.author);
      formData.append("price", values.price);
      formData.append("genreId", values.genreId);
      formData.append("bookImage", this.state.bookImage);

      //   for (let data of formData.entries()) {
      //     console.log(`Book ====>>>", ${data[0]},${data[1]}`);
      //   }

      const { CreateBooks } = this.props;
      CreateBooks(formData);
    };
    return (
      <div className="books">
        <Link to="/books">
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
                  <span className="label-style">Author</span>
                  <Form.Item
                    // labelCol={{ span: 24 }}
                    // label="Password"
                    name="author"
                    rules={[{ required: true }]}
                  >
                    <Input
                      name="author"
                      type="author"
                      placeholder="Author"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                  <Form.Item name="language" rules={[{ required: true }]}>
                    <Input
                      name="language"
                      type="text"
                      placeholder="Language"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                  <Form.Item name="price" rules={[{ required: true }]}>
                    <Input
                      name="price"
                      type="text"
                      placeholder="Price"
                      className="input-style"
                      onChange={this.handleChange}
                    />
                  </Form.Item>
                  <Form.Item
                    name="genreId"
                    rules={[{ required: true, message: "Genre is required" }]}
                  >
                    <Select placeholder="Select Genre">
                      {genres?.map((option) => (
                        <Option key={option.id} value={option.id}>
                          {option.name}, {option.range}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
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
                          bookImage: newFileList[0]?.originFileObj,
                        })
                      }
                    >
                      <Button icon={<UploadOutlined />}>Add Book Image</Button>
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
  genre: { getlistOfGenres },
  book: {
    createBook: { errors, message, loading },
  },
}) => ({
  getlistOfGenres,
  loading,
  errors,
  message,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { GetGenres, CreateBooks })
)(CreateBook);

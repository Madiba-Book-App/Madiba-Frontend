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
  Image,
  Spin,
} from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";

import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { EditBook } from "redux/actions/book/Update";
import getOne from "redux/actions/book/getOne";
import GetGenres from "redux/actions/genre/Get";
import CustomButton from "../../common/Button/button.jsx";
import clearBookstore from "redux/actions/book/clearStore";
import "./books.scss";

const { Option } = Select;

class EditBookComponent extends Component {
  state = {
    bookImage: "",
    book: [],
    loading: false,
    genres: [],
    loadingBook: false,
    message: "",
    errors: [],
  };

  componentDidMount() {
    const { getOne, GetGenres } = this.props;
    GetGenres();
    getOne(this.props.match.params.id);
  }

  componentWillUnmount = () => {
    const { clearBookstore } = this.props;
    clearBookstore();
  };

  static getDerivedStateFromProps(props) {
    return {
      book: props?.getOneBook.book,
      genres: props?.getlistOfGenres.genre,
      loadingBook: props?.loadingBook,
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
    const { genres, loading, errors, book, loadingBook } = this.state;

    const onFinish = (values) => {
      const formData = new FormData();

      if (values.genreId === undefined) {
        formData.append("title", values.title);
        formData.append("language", values.language);
        formData.append("description", values.description);
        formData.append("author", values.author);
        formData.append("price", values.price);
        formData.append("bookImage", this.state.bookImage);

        // for (let data of formData.entries()) {
        //   console.log(`Book ====>>>", ${data[0]},${data[1]}`);
        // }

        const { EditBook } = this.props;

        EditBook(formData, this.props.match.params.id);
      } else {
        formData.append("title", values.title);
        formData.append("language", values.language);
        formData.append("description", values.description);
        formData.append("author", values.author);
        formData.append("price", values.price);
        formData.append("genreId", values.genreId);
        formData.append("bookImage", this.state.bookImage);

        const { EditBook } = this.props;

        EditBook(formData, this.props.match.params.id);
      }
    };
    return (
      <div className="books">
        <Link to="/books">
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
                <Image src={book?.bookImage} />
                <div className="sign-container">
                  <div className="auth-card">
                    <span className="label-style">Title</span>

                    <Form onFinish={onFinish}>
                      <Form.Item
                        name="title"
                        initialValue={book?.title}
                        rules={[{ required: true }]}
                      >
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
                        initialValue={book?.author}
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
                      <Form.Item
                        name="language"
                        initialValue={book?.language}
                        rules={[{ required: true }]}
                      >
                        <Input
                          name="language"
                          type="text"
                          placeholder="Language"
                          className="input-style"
                          onChange={this.handleChange}
                        />
                      </Form.Item>
                      <Form.Item
                        name="price"
                        initialValue={book?.price}
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
                      <Form.Item name="genreId">
                        <Select
                          defaultValue={` ${book?.genre.name} - ${book?.genre.range} `}
                          placeholder="Select Genre"
                        >
                          {genres?.map((option) => {
                            return (
                              <Option key={option.id} value={option.id}>
                                {option.name}, {option.range}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name="description"
                        initialValue={book?.description}
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
                              bookImage: newFileList[0]?.originFileObj,
                            })
                          }
                        >
                          <Button icon={<UploadOutlined />}>
                            Add Book Image
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
  genre: { getlistOfGenres },
  book: {
    editBook: { errors, message, loading },
    getBook: { loading: loadingBook },
    getOneBook,
  },
}) => ({
  getlistOfGenres,
  loadingBook,
  getOneBook,
  loading,
  errors,
  message,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { GetGenres, EditBook, getOne, clearBookstore })
)(EditBookComponent);

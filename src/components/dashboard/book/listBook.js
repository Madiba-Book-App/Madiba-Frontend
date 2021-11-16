import React, { Component } from "react";
import { Row, Col, Spin, Card, Popconfirm, message } from "antd";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";

import CustomButton from "../../common/Button/button.jsx";
import GetBooks from "redux/actions/book/Get";
import deleteBook from "redux/actions/book/delete";

import "./books.scss";

class ListBook extends Component {
  state = {
    listOfBooks: [],
    loading: false,
    errors: {},
    messageDelete: "",
    loadingDelete: false,
  };

  componentDidMount() {
    const { GetBooks } = this.props;
    GetBooks();
  }

  static getDerivedStateFromProps(props) {
    return {
      listOfBooks: props.getlistOfBooks.books,
      messageDelete: props?.messageDelete,
      loadingDelete: props?.loadingDelete,
      loading: props?.loading,
      errors: props?.errors,
    };
  }
  confirm(e) {
    const { deleteBook } = this.props;
    deleteBook(e);
  }

  componentDidUpdate() {
    if (this.state.messageDelete) {
      message.success(this.state.messageDelete, 3);
      setTimeout(() => {
        window.location.reload();
        // eslint-disable-next-line no-restricted-globals
      }, 3000);
    }
  }

  render() {
    const { loading, listOfBooks, loadingDelete } = this.state;

    return (
      <div className="books">
        <Row>
          <Col span={8}>
            <div className="div-create">
              <Link to="/create-book">
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
        ) : listOfBooks === undefined ? (
          <p className="text-centered">No books available, please create</p>
        ) : (
          <Row>
            {listOfBooks?.map((book) => {
              return (
                <Col key={book.id} span={6}>
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
                        src={book?.bookImage}
                      />
                    }
                    actions={[
                      <Link to={`/book/${book.id}`}>
                        <CustomButton
                          htmlType="submit"
                          className="width-btn-update"
                        >
                          Update
                        </CustomButton>
                      </Link>,
                      <Popconfirm
                        title="Are you sure you want to delete this book?"
                        onConfirm={() => this.confirm(book.id)}
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
                      author:{" "}
                      <span className="book-details">{book?.author}</span>
                    </p>
                    <p>
                      title: <span className="book-details">{book?.title}</span>
                    </p>
                    <p>
                      description:{" "}
                      <span className="book-details">{book?.description}</span>
                    </p>
                    <p>
                      price: <span className="book-details">{book.price}</span>
                    </p>
                    <p>
                      genre:{" "}
                      <span
                        className={
                          book.genre?.name === "Adults"
                            ? "adult"
                            : book.genre?.name === "Kids"
                            ? "kids"
                            : "teen"
                        }
                      >
                        {book.genre?.name}
                      </span>
                    </p>
                    <p>
                      range:{" "}
                      <span
                        className={
                          book.genre?.name === "Adults"
                            ? "adult"
                            : book.genre?.name === "Kids"
                            ? "kids"
                            : "teen"
                        }
                      >
                        {book.genre?.range}
                      </span>
                    </p>
                    <p>
                      language:{" "}
                      <span className="book-details">{book?.language}</span>
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
  book: {
    getlistOfBooks,
    getBooks: { errors, message, loading },
    deleteBook: { loading: loadingDelete, message: messageDelete },
  },
}) => ({
  getlistOfBooks,
  errors,
  message,
  loading,
  loadingDelete,
  messageDelete,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { GetBooks, deleteBook })
)(ListBook);

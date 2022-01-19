import React, { Component } from "react";
import { Table, Spin } from "antd";
import { connect } from "react-redux";

import UsersAction from "redux/actions/user/Users";

import "./listUser.scss";

const columns = [
  {
    title: "Name",
    dataIndex: "names",
    key: "names",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "User Class",
    dataIndex: "genre",
    key: "genre",
    render: (genre) => {
      return <a>{genre?.name}</a>;
    },
  },
  {
    title: "Age",
    dataIndex: "genre",
    key: "genre",
    render: (genre) => {
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      return <a>{genre?.range}</a>;
    },
  },
];

class ListUsers extends Component {
  state = {
    listOfUsers: [],
    loading: false,
    errors: {},
  };

  componentDidMount() {
    const { UsersAction } = this.props;
    UsersAction();
  }

  static getDerivedStateFromProps(props) {
    return {
      listOfUsers: props.listOfUsers.users,
      loading: props.loading,
    };
  }

  render() {
    const { listOfUsers, loading } = this.state;

    const newValue = listOfUsers?.filter((user) => user.role.name !== "admin");

    return (
      <div className="users">
        {loading ? (
          <div className="example">
            <Spin />
          </div>
        ) : listOfUsers === undefined ? (
          <p className="text-centered">No books available, please create</p>
        ) : (
          <Table rowKey="id" columns={columns} dataSource={newValue} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  user: {
    listOfUsers,
    users: { errors, message, loading },
  },
}) => ({
  listOfUsers,
  errors,
  message,
  loading,
});

export default connect(mapStateToProps, { UsersAction })(ListUsers);

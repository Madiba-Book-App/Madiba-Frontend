import React, { PureComponent } from "react";
import { Layout, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

// import clearLandStore from "redux/actions/land/clearLandStore";
// import clearLandTransfer from "redux/actions/land-transfer/clearLandTranfer";
// import clearReissuance from "redux/actions/deed-reissuance/clearReissuance";

import Footer from "./footer";

import "./sidebar.scss";

const { Sider } = Layout;

class Sidebar extends PureComponent {
  componentWillUnmount = () => {
    // const { clearLandStore, clearReissuance } = this.props;
    // clearLandStore();
    // clearReissuance();
    // clearLandTransfer();
  };

  render() {
    return (
      <div className="slider">
        <Sider
          className="sider-class"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            backgroundColor: "#01579b",
            zIndex: 1,
            left: 0,
          }}
        >
          <br />

          <Menu
            className="sider-class"
            mode="inline"
            defaultSelectedKeys={["/books"]}
            // eslint-disable-next-line no-restricted-globals
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/books">
              <Link to="/books">
                <span className="side-text">Books</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/users">
              <Link to="/users">
                <span className="side-text">Users</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/events">
              <Link to="/events">
                <span className="side-text">Events</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/borrowed">
              <Link to="/borrowed">
                <span className="side-text">Borrowed</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="/subscription">
              <Link to="/subscription">
                <span className="side-text">Subscription</span>
              </Link>
            </Menu.Item>

            <Footer />
          </Menu>
        </Sider>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { profile } }) => ({
  profile,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    // clearLandStore,
    // clearLandTransfer,
    // clearReissuance,
  })
)(Sidebar);

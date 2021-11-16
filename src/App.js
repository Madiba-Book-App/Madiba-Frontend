import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";
import routes from "routes";
import NotFoundPage from "pages/NotFoundPage";

const App = ({ isAuth }) => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            exact
            path={route.path}
            protected={route.protected}
            role={route.role}
            render={(props) => {
              if (route.protected && !isAuth) return <Redirect to="/" />;
              document.title = route.name;
              return (
                <route.component
                  // eslint-disable-next-line react/prop-types
                  location={props.location}
                  // eslint-disable-next-line react/prop-types
                  history={props.history}
                  // eslint-disable-next-line react/prop-types
                  match={props.match}
                />
              );
            }}
          />
        ))}
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export const mapStateToProps = ({ user: { isAuth } }) => ({ isAuth });

export default connect(mapStateToProps, null)(App);

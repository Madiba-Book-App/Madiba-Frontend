import Dashboard from "pages/dashboard/dashboard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Users",
  protected: true,
  path: "/users",
  component: Dashboard,
};

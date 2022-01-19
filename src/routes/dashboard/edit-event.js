import Dashboard from "pages/dashboard/dashboard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Edit Event",
  protected: true,
  path: "/event/:id",
  component: Dashboard,
};

import Dashboard from "pages/dashboard/dashboard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Edit Book",
  protected: true,
  path: "/book/:id",
  component: Dashboard,
};

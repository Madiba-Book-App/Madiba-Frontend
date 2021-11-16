import Dashboard from "pages/dashboard/dashboard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Create Book",
  protected: true,
  path: "/create-book",
  component: Dashboard,
};

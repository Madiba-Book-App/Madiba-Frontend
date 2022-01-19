import Dashboard from "pages/dashboard/dashboard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Events",
  protected: true,
  path: "/events",
  component: Dashboard,
};

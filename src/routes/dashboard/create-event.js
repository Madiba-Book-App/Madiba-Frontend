import Dashboard from "pages/dashboard/dashboard";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Create Event",
  protected: true,
  path: "/create-event",
  component: Dashboard,
};

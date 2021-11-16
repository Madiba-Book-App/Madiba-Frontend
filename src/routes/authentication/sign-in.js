import Signin from "pages/authentication/signIn";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  exact: true,
  name: "Login",
  protected: false,
  path: "/",
  component: Signin,
};

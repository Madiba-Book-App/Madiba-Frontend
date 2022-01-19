import { user as initialState } from "redux/store/initialState";

import loginReducer from "./LoginReducer";
import ListUser from "./ListUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const login = loginReducer(state, action);
  const users = ListUser(state, action);

  return login || users || state;
};

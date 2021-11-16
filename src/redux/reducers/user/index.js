import { user as initialState } from "redux/store/initialState";

import loginReducer from "./LoginReducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const login = loginReducer(state, action);

  return login || state;
};

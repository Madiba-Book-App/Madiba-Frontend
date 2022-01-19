import { userActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.GET_USERS_START:
      return {
        ...state,
        users: {
          ...state.users,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case userActionsTypes.GET_USERS_END:
      return {
        ...state,
        users: { ...state.users, loading: false },
      };
    case userActionsTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        listOfUsers: payload,
        users: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case userActionsTypes.GET_USERS_FAILURE:
      return {
        ...state,
        users: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

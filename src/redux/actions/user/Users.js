import { userActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: "http://localhost:9000/api/v1/users",
      onStart: userActionsTypes.GET_USERS_START,
      onEnd: userActionsTypes.GET_USERS_END,
      onSuccess: userActionsTypes.GET_USERS_SUCCESS,
      onFailure: userActionsTypes.GET_USERS_FAILURE,
    })
  );

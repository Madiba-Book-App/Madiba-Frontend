import { userActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: "post",
      url: "http://localhost:9000/api/v1/auth/login",
      data: { ...formData },
      onStart: userActionsTypes.LOGIN_USER_START,
      onEnd: userActionsTypes.LOGIN_USER_END,
      onSuccess: userActionsTypes.LOGIN_USER_SUCCESS,
      onFailure: userActionsTypes.LOGIN_USER_FAILURE,
    })
  );

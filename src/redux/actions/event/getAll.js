import { eventActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: "http://localhost:9000/api/v1/events",
      onStart: eventActionsTypes.GET_EVENT_START,
      onEnd: eventActionsTypes.GET_EVENT_END,
      onSuccess: eventActionsTypes.GET_EVENT_SUCCESS,
      onFailure: eventActionsTypes.GET_EVENT_FAILURE,
    })
  );

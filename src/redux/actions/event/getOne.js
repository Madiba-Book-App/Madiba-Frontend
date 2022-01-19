import { eventActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: `http://localhost:9000/api/v1/events/${id}`,
      onStart: eventActionsTypes.GET_SINGLE_EVENT_START,
      onEnd: eventActionsTypes.GET_SINGLE_EVENT_END,
      onSuccess: eventActionsTypes.GET_SINGLE_EVENT_SUCCESS,
      onFailure: eventActionsTypes.GET_SINGLE_EVENT_FAILURE,
    })
  );

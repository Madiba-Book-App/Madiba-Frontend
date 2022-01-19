import { eventActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: "delete",
      url: `http://localhost:9000/api/v1/events/${id}`,
      onStart: eventActionsTypes.DELETE_EVENT_START,
      onEnd: eventActionsTypes.DELETE_EVENT_END,
      onSuccess: eventActionsTypes.DELETE_EVENT_SUCCESS,
      onFailure: eventActionsTypes.DELETE_EVENT_FAILURE,
    })
  );

import { eventActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

export const EditEvent = (data, id) => (dispatch) =>
  dispatch(
    apiAction({
      data,
      httpOptions: { headers: { "content-type": "multipart/form-data" } },
      method: "put",
      url: `http://localhost:9000/api/v1/events/${id}`,
      onStart: eventActionsTypes.EDIT_EVENT_START,
      onEnd: eventActionsTypes.EDIT_EVENT_END,
      onSuccess: eventActionsTypes.EDIT_EVENT_SUCCESS,
      onFailure: eventActionsTypes.EDIT_EVENT_FAILURE,
    })
  );

import { eventActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

export const CreateEvents = (data) => (dispatch) =>
  dispatch(
    apiAction({
      data,
      httpOptions: { headers: { "content-type": "multipart/form-data" } },
      method: "post",
      url: "http://localhost:9000/api/v1/events",
      onStart: eventActionsTypes.CREATE_EVENT_START,
      onEnd: eventActionsTypes.CREATE_EVENT_END,
      onSuccess: eventActionsTypes.CREATE_EVENT_SUCCESS,
      onFailure: eventActionsTypes.CREATE_EVENT_FAILURE,
    })
  );

import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (payload) => (dispatch) =>
  dispatch({
    type: eventActionsTypes.CLEAR_EVENT_STORE,
    payload,
  });

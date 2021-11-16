import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (payload) => (dispatch) =>
  dispatch({
    type: bookActionsTypes.CLEAR_BOOK_STORE,
    payload,
  });

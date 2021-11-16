import { bookActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: "delete",
      url: `http://localhost:9000/api/v1/books/${id}`,
      onStart: bookActionsTypes.DELETE_BOOK_START,
      onEnd: bookActionsTypes.DELETE_BOOK_END,
      onSuccess: bookActionsTypes.DELETE_BOOK_SUCCESS,
      onFailure: bookActionsTypes.DELETE_BOOK_FAILURE,
    })
  );

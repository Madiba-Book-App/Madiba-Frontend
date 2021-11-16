import { bookActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: `http://localhost:9000/api/v1/books/${id}`,
      onStart: bookActionsTypes.GET_SINGLE_BOOK_START,
      onEnd: bookActionsTypes.GET_SINGLE_BOOK_END,
      onSuccess: bookActionsTypes.GET_SINGLE_BOOK_SUCCESS,
      onFailure: bookActionsTypes.GET_SINGLE_BOOK_FAILURE,
    })
  );

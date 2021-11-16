import { bookActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

export const EditBook = (data, id) => (dispatch) =>
  dispatch(
    apiAction({
      data,
      httpOptions: { headers: { "content-type": "multipart/form-data" } },
      method: "put",
      url: `http://localhost:9000/api/v1/books/${id}`,
      onStart: bookActionsTypes.EDIT_BOOK_START,
      onEnd: bookActionsTypes.EDIT_BOOK_END,
      onSuccess: bookActionsTypes.EDIT_BOOK_SUCCESS,
      onFailure: bookActionsTypes.EDIT_BOOK_FAILURE,
    })
  );

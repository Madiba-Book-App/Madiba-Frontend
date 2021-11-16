import { bookActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

export const CreateBooks = (data) => (dispatch) =>
  dispatch(
    apiAction({
      data,
      httpOptions: { headers: { "content-type": "multipart/form-data" } },
      method: "post",
      url: "http://localhost:9000/api/v1/books",
      onStart: bookActionsTypes.CREATE_BOOK_START,
      onEnd: bookActionsTypes.CREATE_BOOK_END,
      onSuccess: bookActionsTypes.CREATE_BOOK_SUCCESS,
      onFailure: bookActionsTypes.CREATE_BOOK_FAILURE,
    })
  );

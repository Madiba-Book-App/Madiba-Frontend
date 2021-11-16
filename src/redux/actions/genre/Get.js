import { genreActionsTypes } from "redux/action-types";
import { apiAction } from "helpers";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: "http://localhost:9000/api/v1/genre",
      onStart: genreActionsTypes.GET_GENRE_START,
      onEnd: genreActionsTypes.GET_GENRE_END,
      onSuccess: genreActionsTypes.GET_GENRE_SUCCESS,
      onFailure: genreActionsTypes.GET_GENRE_FAILURE,
    })
  );

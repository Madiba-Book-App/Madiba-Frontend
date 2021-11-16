import { genreActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case genreActionsTypes.GET_GENRE_START:
      return {
        ...state,
        getGenres: {
          ...state.getGenres,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case genreActionsTypes.GET_GENRE_END:
      return {
        ...state,
        getGenres: { ...state.getGenres, loading: false },
      };
    case genreActionsTypes.GET_GENRE_SUCCESS:
      return {
        ...state,
        getlistOfGenres: payload,
        getGenres: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case genreActionsTypes.GET_GENRE_FAILURE:
      return {
        ...state,
        getGenres: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

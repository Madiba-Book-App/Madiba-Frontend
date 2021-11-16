import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case bookActionsTypes.GET_BOOK_START:
      return {
        ...state,
        getBooks: {
          ...state.getBooks,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case bookActionsTypes.GET_BOOK_END:
      return {
        ...state,
        getBooks: { ...state.getBooks, loading: false },
      };
    case bookActionsTypes.GET_BOOK_SUCCESS:
      return {
        ...state,
        getlistOfBooks: payload,
        getBooks: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case bookActionsTypes.GET_BOOK_FAILURE:
      return {
        ...state,
        getBooks: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

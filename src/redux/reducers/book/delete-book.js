import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case bookActionsTypes.DELETE_BOOK_START:
      return {
        ...state,
        deleteBook: {
          ...state.deleteBook,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case bookActionsTypes.DELETE_BOOK_END:
      return {
        ...state,
        deleteBook: { ...state.deleteBook, loading: false },
      };
    case bookActionsTypes.DELETE_BOOK_SUCCESS:
      console.log(`success`, payload);
      return {
        ...state,
        deleteBook: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case bookActionsTypes.DELETE_BOOK_FAILURE:
      console.log(`failure`, payload);
      return {
        ...state,
        deleteBook: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

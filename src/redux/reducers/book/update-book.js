import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case bookActionsTypes.EDIT_BOOK_START:
      return {
        ...state,
        editBook: {
          ...state.editBook,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case bookActionsTypes.EDIT_BOOK_END:
      return {
        ...state,
        editBook: { ...state.editBook, loading: false },
      };
    case bookActionsTypes.EDIT_BOOK_SUCCESS:
      return {
        ...state,
        editBook: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case bookActionsTypes.EDIT_BOOK_FAILURE:
      return {
        ...state,
        editBook: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

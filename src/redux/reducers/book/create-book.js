import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case bookActionsTypes.CREATE_BOOK_START:
      return {
        ...state,
        createBook: {
          ...state.createBook,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case bookActionsTypes.CREATE_BOOK_END:
      return {
        ...state,
        createBook: { ...state.createBook, loading: false },
      };
    case bookActionsTypes.CREATE_BOOK_SUCCESS:
      return {
        ...state,
        bookCreated: payload,
        createBook: { loading: false, message: payload.message, errors: {} },
      };
    case bookActionsTypes.CREATE_BOOK_FAILURE:
      return {
        ...state,
        createBook: {
          loading: false,
          message: "",
          errors: payload?.errors || payload?.errors?.message,
        },
      };
    default:
      return null;
  }
};

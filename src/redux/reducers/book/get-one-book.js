import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case bookActionsTypes.GET_SINGLE_BOOK_START:
      return {
        ...state,
        getBook: {
          ...state.getBook,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case bookActionsTypes.GET_SINGLE_BOOK_END:
      return {
        ...state,
        getBook: { ...state.getBook, loading: false },
      };
    case bookActionsTypes.GET_SINGLE_BOOK_SUCCESS:
      return {
        ...state,
        getOneBook: payload,
        getBook: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case bookActionsTypes.GET_SINGLE_BOOK_FAILURE:
      return {
        ...state,
        getBook: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

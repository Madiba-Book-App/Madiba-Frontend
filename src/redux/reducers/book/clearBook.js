import { bookActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type }) => {
  switch (type) {
    case bookActionsTypes.CLEAR_BOOK_STORE:
      return {
        ...state,
        editBook: {
          loading: false,
          message: "",
          errors: {},
        },
      };

    default:
      return null;
  }
};

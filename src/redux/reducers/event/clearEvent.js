import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type }) => {
  switch (type) {
    case eventActionsTypes.CLEAR_EVENT_STORE:
      return {
        ...state,
        deleteEvent: {
          loading: false,
          message: "",
          errors: {},
        },
        createEvent: {
          loading: false,
          message: "",
          errors: {},
        },
        editEvent: {
          loading: false,
          message: "",
          errors: {},
        },
      };

    default:
      return null;
  }
};

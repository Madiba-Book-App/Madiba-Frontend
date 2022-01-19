import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case eventActionsTypes.DELETE_EVENT_START:
      return {
        ...state,
        deleteEvent: {
          ...state.deleteEvent,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case eventActionsTypes.DELETE_EVENT_END:
      return {
        ...state,
        deleteEvent: { ...state.deleteEvent, loading: true },
      };
    case eventActionsTypes.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        deleteEvent: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case eventActionsTypes.DELETE_EVENT_FAILURE:
      return {
        ...state,
        deleteEvent: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

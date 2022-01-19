import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case eventActionsTypes.EDIT_EVENT_START:
      return {
        ...state,
        editEvent: {
          ...state.editEvent,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case eventActionsTypes.EDIT_EVENT_END:
      return {
        ...state,
        editEvent: { ...state.editEvent, loading: false },
      };
    case eventActionsTypes.EDIT_EVENT_SUCCESS:
      return {
        ...state,
        editEvent: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case eventActionsTypes.EDIT_EVENT_FAILURE:
      return {
        ...state,
        editEvent: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

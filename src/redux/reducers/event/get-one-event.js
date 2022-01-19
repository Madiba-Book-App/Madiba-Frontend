import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case eventActionsTypes.GET_SINGLE_EVENT_START:
      return {
        ...state,
        getEvent: {
          ...state.getEvent,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case eventActionsTypes.GET_SINGLE_EVENT_END:
      return {
        ...state,
        getEvent: { ...state.getEvent, loading: false },
      };
    case eventActionsTypes.GET_SINGLE_EVENT_SUCCESS:
      return {
        ...state,
        getOneEvent: payload,
        getEvent: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case eventActionsTypes.GET_SINGLE_EVENT_FAILURE:
      return {
        ...state,
        getEvent: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

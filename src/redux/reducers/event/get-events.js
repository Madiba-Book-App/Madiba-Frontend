import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case eventActionsTypes.GET_EVENT_START:
      return {
        ...state,
        getEvents: {
          ...state.getEvents,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case eventActionsTypes.GET_EVENT_END:
      return {
        ...state,
        getEvents: { ...state.getEvents, loading: false },
      };
    case eventActionsTypes.GET_EVENT_SUCCESS:
      return {
        ...state,
        getlistOfEvents: payload,
        getEvents: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case eventActionsTypes.GET_EVENT_FAILURE:
      return {
        ...state,
        getEvents: {
          loading: false,
          message: "",
          errors: payload.errors,
        },
      };
    default:
      return null;
  }
};

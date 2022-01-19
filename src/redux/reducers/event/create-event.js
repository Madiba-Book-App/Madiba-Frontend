import { eventActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, { type, payload }) => {
  switch (type) {
    case eventActionsTypes.CREATE_EVENT_START:
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case eventActionsTypes.CREATE_EVENT_END:
      return {
        ...state,
        createEvent: { ...state.createEvent, loading: false },
      };
    case eventActionsTypes.CREATE_EVENT_SUCCESS:
      console.log(`SUCCESS ==>>>`, payload);
      return {
        ...state,
        eventCreated: payload,
        createEvent: { loading: false, message: payload.message, errors: {} },
      };
    case eventActionsTypes.CREATE_EVENT_FAILURE:
      console.log(`FAILURE ===>>>`, payload);
      return {
        ...state,
        createEvent: {
          loading: false,
          message: "",
          errors: payload?.errors || payload?.errors?.message,
        },
      };
    default:
      return null;
  }
};

import { event as initialState } from "redux/store/initialState";

import get from "./get-events";
import create from "./create-event";
import edit from "./update";
import getEvent from "./get-one-event";
import clearEvent from "./clearEvent";
import deleteEvent from "./delete";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const getEvents = get(state, action);
  const createEvent = create(state, action);
  const editEvent = edit(state, action);
  const one = getEvent(state, action);
  const clearEventStore = clearEvent(state, action);
  const deleteE = deleteEvent(state, action);

  return (
    getEvents ||
    createEvent ||
    editEvent ||
    one ||
    clearEventStore ||
    deleteE ||
    state
  );
};

import { genre as initialState } from "redux/store/initialState";

import get from "./get-genres";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const getGenres = get(state, action);

  return getGenres || state;
};

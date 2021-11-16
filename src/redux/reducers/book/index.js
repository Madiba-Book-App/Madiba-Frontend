import { book as initialState } from "redux/store/initialState";

import get from "./get-books";
import create from "./create-book";
import edit from "./update-book";
import getBook from "./get-one-book";
import clearBook from "./clearBook";
import deleteBook from "./delete-book";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const getBooks = get(state, action);
  const createBook = create(state, action);
  const editBook = edit(state, action);
  const getOneBook = getBook(state, action);
  const clearBookUpdate = clearBook(state, action);
  const deleteB = deleteBook(state, action);

  return (
    getBooks ||
    createBook ||
    editBook ||
    getOneBook ||
    clearBookUpdate ||
    deleteB ||
    state
  );
};

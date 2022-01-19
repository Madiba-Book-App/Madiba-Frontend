import Signin from "routes/authentication/sign-in";
import ViewBook from "routes/dashboard/view-books";
import ViewEvent from "routes/dashboard/view-events";
import CreateBook from "routes/dashboard/create-book";
import CreateEvent from "routes/dashboard/create-event";
import EditBook from "routes/dashboard/edit-book";
import EditEvent from "routes/dashboard/edit-event";
import Users from "routes/dashboard/users";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Signin,
  ViewBook,
  CreateBook,
  EditBook,
  Users,
  CreateEvent,
  ViewEvent,
  EditEvent,
];

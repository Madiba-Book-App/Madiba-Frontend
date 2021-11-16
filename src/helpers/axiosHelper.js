import "dotenv/config";
import axios from "axios";
import * as urlHelper from "./urlHelper";

const { NODE_ENV } = process.env;
const { serverUrl } = urlHelper.backend;

// eslint-disable-next-line import/no-anonymous-default-export
export default (data = {}) => {
  const { URL } = data;

  const baseURL = URL || (serverUrl && `${serverUrl}/api`);
  const headers = {
    "access-token": localStorage.token || undefined,
  };

  return (NODE_ENV === "test" && axios) || axios.create({ baseURL, headers });
};

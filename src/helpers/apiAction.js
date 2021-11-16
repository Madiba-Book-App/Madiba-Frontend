import { apiActionsTypes } from "redux/action-types";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  url = "",
  method = "GET",
  data = null,
  httpOptions = {},
  responseType = "",
  onStart = apiActionsTypes.API_REQUEST_START,
  onEnd = apiActionsTypes.API_REQUEST_END,
  onSuccess = apiActionsTypes.API_REQUEST_SUCCESS,
  onFailure = apiActionsTypes.API_REQUEST_FAILURE,
  label = "",
}) => ({
  type: apiActionsTypes.API_REQUEST,
  payload: {
    url,
    responseType,
    method,
    data,
    httpOptions,
    onSuccess,
    onFailure,
    onStart,
    onEnd,
    label,
  },
});

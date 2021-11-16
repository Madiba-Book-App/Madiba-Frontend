import "dotenv/config";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import initialState from "redux/store/initialState";
import reducers from "redux/reducers";
import apiMiddleware from "middlewares/apiMiddleware";

const middlewares = [thunk, apiMiddleware];

export default createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

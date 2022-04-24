import { createStore, applyMiddleware, compose } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import { sessionService } from "redux-react-session";

const intialState = {};
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  compose(applyMiddleware(...middlewares))
);

sessionService.initSessionService(store);

export default store;

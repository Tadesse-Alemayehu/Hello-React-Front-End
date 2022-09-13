import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import logger from "react-logger";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

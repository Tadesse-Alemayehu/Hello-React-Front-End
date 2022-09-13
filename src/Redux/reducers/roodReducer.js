import greetingReducer from "./Greeting/greeting";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  Greeting: greetingReducer,
});

export default rootReducer;

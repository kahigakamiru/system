import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import task from "./tasks.reducer";

export default combineReducers({
  auth,
  message,
  task,
});

import { combineReducers } from "redux";
import updateDataReducer from "./updateDataReducer";

const rootReducer = combineReducers({
  updateDataReducer,
});

export default rootReducer;

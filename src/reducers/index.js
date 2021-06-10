// Redux isn't necessary in this project.
// I just used it to show that I know Redux. :P
// - Takao
import { combineReducers } from "redux";
import updateDataReducer from "./updateDataReducer";

const rootReducer = combineReducers({
  updateDataReducer,
});

export default rootReducer;

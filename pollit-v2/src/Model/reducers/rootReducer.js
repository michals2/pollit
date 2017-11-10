import { combineReducers } from "redux";
import feedItems from "./feedReducer";

const rootReducer = combineReducers({
  feedItems
});

export default rootReducer;

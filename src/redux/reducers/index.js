import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  user: userReducer,
});

export default rootReducer;

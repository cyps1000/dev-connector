import { combineReducers } from "redux";

import alertsReducer from "./alert";
import authReducer from "./auth";
import profileReducer from "./profile";
import postReducer from "./post";

const reducers = combineReducers({
  alert: alertsReducer,
  auth: authReducer,
  profile: profileReducer,
  post: postReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

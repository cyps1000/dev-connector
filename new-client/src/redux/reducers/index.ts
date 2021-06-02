import { combineReducers } from "redux";

import alertsReducer from "./alert";
import authReducer from "./auth";
import profileReducer from "./profile";

const reducers = combineReducers({
  alert: alertsReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

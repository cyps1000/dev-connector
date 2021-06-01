import { combineReducers } from "redux";

import alertsReducer from "./alert";
import authReducer from "./auth";

const reducers = combineReducers({
  alert: alertsReducer,
  auth: authReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

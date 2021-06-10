import produce from "immer";

import { AlertActionTypes as ActionTypes, Alert } from "../types";
import { AlertAction } from "../actions";

interface Alerts {
  open: boolean;
  alert: Alert;
}

const initialState: Alerts = {
  open: false,
  alert: { msg: [], severity: "info" },
};

const reducer = produce(
  (state: Alerts = initialState, action: AlertAction): Alerts => {
    switch (action.type) {
      case ActionTypes.DISPATCH_ALERT:
        state.open = true;
        state.alert = action.payload;
        return state;

      case ActionTypes.REMOVE_ALERT:
        state.open = false;
        state.alert = initialState.alert;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;

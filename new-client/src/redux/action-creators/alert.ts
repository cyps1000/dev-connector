import { Dispatch } from "redux";

import { AlertActionTypes as ActionTypes, Alert } from "../types";
import { AlertAction } from "../actions";

export const dispatchAlert =
  (msg: string[], severity: string, timeout = 2.5 * 1000) =>
  (dispatch: Dispatch<AlertAction>) => {
    dispatch({
      type: ActionTypes.DISPATCH_ALERT,
      payload: { msg, severity } as Alert,
      open: true,
    });

    setTimeout(
      () => dispatch({ type: ActionTypes.REMOVE_ALERT, open: false }),
      timeout
    );
  };

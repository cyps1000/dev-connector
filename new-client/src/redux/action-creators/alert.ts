import { Dispatch } from "redux";

import { AlertActionTypes as ActionTypes, Alert } from "../types";

export const dispatchAlert =
  (msg: string[], severity: string, timeout = 3 * 1000) =>
  (dispatch: Dispatch) => {
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

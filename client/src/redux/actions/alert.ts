import { AlertActionTypes as ActionTypes, Alert } from "../types";

/**
 * Defines the DispatchAlertAction interface
 */
export interface DispatchAlertAction {
  type: ActionTypes.DISPATCH_ALERT;
  payload: Alert;
  open: boolean;
}

/**
 * Defines the RemoveAlertAction interface
 */
export interface RemoveAlertAction {
  type: ActionTypes.REMOVE_ALERT;
  open: boolean;
}

/**
 * Defines the general action type
 */
export type AlertAction = DispatchAlertAction | RemoveAlertAction;

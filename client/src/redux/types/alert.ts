/**
 * Defines the actions types.
 */
export enum AlertActionTypes {
  DISPATCH_ALERT = "dispatch_alert",
  REMOVE_ALERT = "remove_alert",
}

export type Color = "success" | "info" | "warning" | "error";

/**
 * Defines the Alert interface.
 */
export interface Alert {
  msg: string[];
  severity: Color;
}

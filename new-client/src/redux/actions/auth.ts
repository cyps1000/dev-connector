import {
  RegisterUserActionTypes,
  LoginUserActionTypes,
  LogoutUserActionTypes,
  LoadUserActionTypes,
  AuthPayload,
  LoadUser,
} from "../types";

/**
 * Defines the AuthSuccess interface
 */
export interface AuthSuccessAction {
  type:
    | LoginUserActionTypes.LOGIN_SUCCESS
    | RegisterUserActionTypes.REGISTER_SUCCESS;
  payload: AuthPayload;
}

/**
 * Defines the AuthFailAction interface
 */
export interface AuthFailAction {
  type: RegisterUserActionTypes.REGISTER_FAIL | LoginUserActionTypes.LOGIN_FAIL;
  payload: {
    msg: string;
  }[];
}

export interface LogoutUserAction {
  type: LogoutUserActionTypes.LOGOUT;
  payload: {
    msg: string;
  }[];
}

/**
 * Defines the UserLoadedAction interface
 */
export interface UserLoadedAction {
  type: LoadUserActionTypes.USER_LOADED;
  payload: LoadUser;
}

/**
 * Defines the UserErrorAction interface
 */
export interface UserErrorAction {
  type: LoadUserActionTypes.AUTH_ERROR;
  payload: {
    msg: string;
  }[];
}

/**
 * Defines the general action types
 */
export type AuthUserAction =
  | AuthSuccessAction
  | AuthFailAction
  | UserLoadedAction
  | UserErrorAction
  | LogoutUserAction;

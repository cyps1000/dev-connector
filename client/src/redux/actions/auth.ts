import {
  RegisterUserActionTypes,
  LoginUserActionTypes,
  LogoutUserActionTypes,
  LoadUserActionTypes,
  DeleteUserActionTypes,
  AuthPayload,
  LoadUser,
} from "../types";

import { ClearProfileAction, GetProfileErrorAction } from "./profile";

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
  payload?: {
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
 * Defines the DeleteUserAction interface
 */
export interface DeleteUserAction {
  type: DeleteUserActionTypes.DELETE_ACCOUNT;
}

/**
 * Defines the general action types
 */
export type AuthUserAction =
  | AuthSuccessAction
  | AuthFailAction
  | UserLoadedAction
  | UserErrorAction
  | LogoutUserAction
  | DeleteUserAction
  | ClearProfileAction
  | GetProfileErrorAction;

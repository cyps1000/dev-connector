/**
 * Defines the actions types for Register
 */
export enum RegisterUserActionTypes {
  REGISTER_SUCCESS = "register_success",
  REGISTER_FAIL = "register_fail",
}

/**
 * Defines the actions types for Login
 */
export enum LoginUserActionTypes {
  LOGIN_SUCCESS = "login_success",
  LOGIN_FAIL = "login_fail",
}

/**
 * Defines the actions types for Loading the user
 */
export enum LoadUserActionTypes {
  USER_LOADED = "user_loaded",
  AUTH_ERROR = "auth_error",
}

/**
 * Defines the actions types for Logging out the user
 */
export enum LogoutUserActionTypes {
  LOGOUT = "logout",
}

/**
 * Defines the AuthPayload interface
 * This is for both Login and Register payload
 */
export interface AuthPayload {
  token: string;
}

/**
 * Defines the LoadUser interface.
 */
export interface LoadUser {
  name: string;
  email: string;
  avatar: string;
  date: string;
  id: string;
}

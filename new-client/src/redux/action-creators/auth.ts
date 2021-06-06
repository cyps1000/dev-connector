import { Dispatch } from "redux";
import axios from "axios";

import {
  RegisterUserActionTypes,
  LoginUserActionTypes,
  LoadUserActionTypes,
  LogoutUserActionTypes,
  DeleteUserActionTypes,
  ProfileActionTypes
} from "../types";
import { AuthUserAction } from "../actions";

import { setAuthToken } from "../../utils";
import { dispatchAlert } from "./alert";

/**
 * Defines the interface for the Register inputs
 */
interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

/**
 * Handles Registering the user
 */
export const register =
  ({ name, email, password }: RegisterBody) =>
  async (dispatch: Dispatch<AuthUserAction>) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const { data } = await axios.post("/api/users", body, config);

      dispatch({
        type: RegisterUserActionTypes.REGISTER_SUCCESS,
        payload: data
      });
      loadUser()(dispatch);
    } catch (err) {
      const errors = err.response.data.errors;

      dispatchAlert(
        errors.map((err: { msg: any }) => err.msg),
        "error",
        3000
      )(dispatch);

      dispatch({
        type: RegisterUserActionTypes.REGISTER_FAIL,
        payload: errors
      });
    }
  };

/**
 * Handles Logging in the user
 */
export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AuthUserAction>) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify({ email, password });

    try {
      const { data } = await axios.post("/api/auth", body, config);

      dispatch({
        type: LoginUserActionTypes.LOGIN_SUCCESS,
        payload: data
      });
      loadUser()(dispatch);
      dispatchAlert(["Successfully logged in!"], "success", 3000)(dispatch);
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatchAlert(
          errors.map((err: { msg: any }) => err.msg),
          "error",
          3000
        )(dispatch);

        dispatch({
          type: LoginUserActionTypes.LOGIN_FAIL,
          payload: errors
        });
      }
    }
  };

/**
 * Handles Loading the user data
 */
export const loadUser = () => async (dispatch: Dispatch<AuthUserAction>) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = await axios.get("/api/auth");

    dispatch({
      type: LoadUserActionTypes.USER_LOADED,
      payload: data
    });
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;

      dispatch({
        type: LoadUserActionTypes.AUTH_ERROR,
        payload: errors
      });
    }
  }
};

/**
 * Handles Logging out the user
 */
export const logout = () => (dispatch: Dispatch<AuthUserAction>) => {
  // dispatch({ type: ProfileActionTypes.CLEAR_PROFILE });
  dispatch({ type: LogoutUserActionTypes.LOGOUT });
  dispatchAlert(["Logged out"], "success")(dispatch);
};

/**
 * Handles Deleting the Account, Posts, Commments **TO ADD: POSTS AND COMMENTS**
 */
export const deleteAccount =
  () => async (dispatch: Dispatch<AuthUserAction>) => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      try {
        await axios.delete(`/api/user`);

        dispatch({ type: ProfileActionTypes.CLEAR_PROFILE });
        dispatch({ type: DeleteUserActionTypes.DELETE_ACCOUNT });

        dispatchAlert(
          ["Your account has beeen permanently removed"],
          "success"
        )(dispatch);
      } catch (err) {
        if (err.response) {
          const errors = err.response.data.errors;

          dispatch({
            type: ProfileActionTypes.PROFILE_ERROR,
            payload: errors
          });
        }
      }
    }
  };

import produce from "immer";

import {
  RegisterUserActionTypes,
  LoginUserActionTypes,
  LoadUserActionTypes,
  LogoutUserActionTypes,
  LoadUser,
} from "../types";
import { AuthUserAction } from "../actions";

interface AuthUsers {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: LoadUser;
  errors?: {
    msg: string;
  }[];
}

const initialState: AuthUsers = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loading: true,
  user: {
    name: "",
    email: "",
    avatar: "",
    date: "",
    id: "",
  },
  errors: [],
};

const reducer = produce(
  (state: AuthUsers = initialState, action: AuthUserAction): AuthUsers => {
    switch (action.type) {
      case RegisterUserActionTypes.REGISTER_SUCCESS:
      case LoginUserActionTypes.LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        state.isAuthenticated = true;
        state.loading = false;
        return state;

      case RegisterUserActionTypes.REGISTER_FAIL:
      case LoginUserActionTypes.LOGIN_FAIL:
      case LoadUserActionTypes.AUTH_ERROR:
      case LogoutUserActionTypes.LOGOUT:
        localStorage.removeItem("token");
        state.isAuthenticated = false;
        state.loading = false;
        state.token = null;
        state.errors = action.payload;
        return state;

      case LoadUserActionTypes.USER_LOADED:
        state.isAuthenticated = true;
        state.loading = false;
        state.user = { ...action.payload };
        return state;

      default:
        return state;
    }
  }
);

export default reducer;

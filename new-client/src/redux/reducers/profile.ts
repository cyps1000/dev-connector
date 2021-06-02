import produce from "immer";

import {
  ProfileActionTypes,
  ProfilePayload,
  GitHubRepoPayload,
} from "../types";
import { ProfileAction } from "../actions";

interface Profiles {
  profile: ProfilePayload | null;
  profiles: ProfilePayload[];
  repos: GitHubRepoPayload[];
  loading: boolean;
  errors?: {
    msg: string;
  }[];
}

const initialState: Profiles = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  errors: [],
};

const reducer = produce(
  (state: Profiles = initialState, action: ProfileAction): Profiles => {
    switch (action.type) {
      case ProfileActionTypes.GET_PROFILE:
      case ProfileActionTypes.UPDATE_PROFILE:
        state.profile = action.payload;
        state.loading = false;
        return state;

      case ProfileActionTypes.GET_PROFILES:
        state.profiles = action.payload;
        state.loading = false;
        return state;

      case ProfileActionTypes.GET_REPOS:
        state.repos = action.payload;
        state.loading = false;
        return state;

      case ProfileActionTypes.PROFILE_ERROR:
        state.errors = action.payload;
        state.loading = false;
        state.profile = null;
        return state;

      case ProfileActionTypes.CLEAR_PROFILE:
        state.profile = null;
        state.repos = [];
        state.loading = false;
        return state;

      case ProfileActionTypes.RESET_PROFILE_LOADING:
        state.loading = true;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;

import {
  ProfileActionTypes,
  ProfilePayload,
  GitHubRepoPayload
} from "../types";

/**
 * Defines the GetProfileAction interface
 * Applies to UPDATE_PROFILE as well
 */
export interface GetProfileAction {
  type: ProfileActionTypes.GET_PROFILE | ProfileActionTypes.UPDATE_PROFILE;
  payload: ProfilePayload;
}

/**
 * Defines the DeleteProfileAction interface
 */
export interface DeleteProfileAction {
  type: ProfileActionTypes.DELETE_PROFILE;
}

/**
 * Defines the GetAllProfilesAction interface
 */
export interface GetAllProfilesAction {
  type: ProfileActionTypes.GET_PROFILES;
  payload: ProfilePayload[];
}

/**
 * Defines the GetRiposAction interface**************** ????
 */
export interface GetRiposAction {
  type: ProfileActionTypes.GET_REPOS;
  payload: GitHubRepoPayload[];
}

/**
 * Defines the GetProfileErrorAction interface
 */
export interface GetProfileErrorAction {
  type: ProfileActionTypes.PROFILE_ERROR;
  payload: {
    msg: string;
  }[];
}

/**
 * Defines the ClearProfileAction interface
 */
export interface ClearProfileAction {
  type: ProfileActionTypes.CLEAR_PROFILE;
}

/**
 * Defines the ResetProfileLoadingAction interface
 */
export interface ResetProfileLoadingAction {
  type: ProfileActionTypes.RESET_PROFILE_LOADING;
}

/**
 * Defines the general action types
 */
export type ProfileAction =
  | GetProfileAction
  | DeleteProfileAction
  | GetAllProfilesAction
  | GetRiposAction
  | GetProfileErrorAction
  | ClearProfileAction
  | ResetProfileLoadingAction;

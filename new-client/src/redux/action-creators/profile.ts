import { Dispatch } from "redux";
import axios from "axios";

import { ProfileActionTypes } from "../types";
import { ProfileAction } from "../actions";
import { dispatchAlert } from "./alert";

/**
 * Defines the formData for creating a profile interface
 */
interface CreateProfileFormData {
  company: string;
  website: string;
  location: string;
  status: string;
  skills: string;
  githubusername: string;
  bio: string;
  twitter: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  instagram: string;
}

/**
 * Defines the formData for adding experience interface
 */
interface AddExperienceFormData {
  company: string;
  title: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

/**
 * Defines the formData for adding education interface
 */
interface AddEducationFormData {
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

/**
 * Handles getting the current user profile
 */
export const getCurrentProfile =
  () => async (dispatch: Dispatch<ProfileAction>) => {
    try {
      const res = await axios.get("/api/profile/me");

      dispatch({
        type: ProfileActionTypes.GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: ProfileActionTypes.PROFILE_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles getting all profiles
 */
export const getProfiles = () => async (dispatch: Dispatch<ProfileAction>) => {
  dispatch({ type: ProfileActionTypes.CLEAR_PROFILE });
  dispatch({ type: ProfileActionTypes.RESET_PROFILE_LOADING });

  try {
    const res = await axios.get("/api/profile");

    dispatch({
      type: ProfileActionTypes.GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;

      dispatch({
        type: ProfileActionTypes.PROFILE_ERROR,
        payload: errors
      });
    }
  }
};

/**
 * Handles getting the profile by ID
 */
export const getProfileById =
  (userId: string) => async (dispatch: Dispatch<ProfileAction>) => {
    dispatch({ type: ProfileActionTypes.CLEAR_PROFILE });

    try {
      const res = await axios.get(`/api/profile/user/${userId}`);

      dispatch({
        type: ProfileActionTypes.GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: ProfileActionTypes.PROFILE_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles Creating / Updating the profile
 */
export const createProfile =
  (formData: CreateProfileFormData, history: any, edit = false) =>
  async (dispatch: Dispatch<ProfileAction>) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const res = await axios.post("/api/profile", formData, config);

      dispatch({
        type: ProfileActionTypes.GET_PROFILE,
        payload: res.data
      });

      dispatchAlert(
        edit ? ["Profile updated"] : ["Profile Created"],
        "success"
      )(dispatch);

      if (!edit) {
        history.push("/dashboard");
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatchAlert(
          errors.map((err: { msg: any }) => err.msg),
          "error"
        )(dispatch);
      }

      dispatch({
        type: ProfileActionTypes.PROFILE_ERROR,
        payload: errors
      });
    }
  };

/**
 * Handles deleting the profile
 */
export const deleteProfile =
  () => async (dispatch: Dispatch<ProfileAction>) => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      try {
        await axios.delete(`/api/profile`);

        dispatch({
          type: ProfileActionTypes.DELETE_PROFILE
        });

        dispatchAlert(["Profile removed"], "success")(dispatch);
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

/**
 * Handles getting the GitHub Repos
 */
export const getGithubRepos =
  (username: string) => async (dispatch: Dispatch<ProfileAction>) => {
    try {
      const res = await axios.get(`/api/profile/github/${username}`);

      dispatch({
        type: ProfileActionTypes.GET_REPOS,
        payload: res.data
      });
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: ProfileActionTypes.PROFILE_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles adding experience
 */
export const addExperience =
  (formData: AddExperienceFormData, history: any) =>
  async (dispatch: Dispatch<ProfileAction>) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const res = await axios.put("/api/profile/experience", formData, config);

      dispatch({
        type: ProfileActionTypes.UPDATE_PROFILE,
        payload: res.data
      });

      dispatchAlert(["Experience added"], "success")(dispatch);
      history.push("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatchAlert(
          errors.map((err: { msg: any }) => err.msg),
          "error"
        )(dispatch);
      }

      dispatch({
        type: ProfileActionTypes.PROFILE_ERROR,
        payload: errors
      });
    }
  };

/**
 * Handles adding education
 */
export const addEducation =
  (formData: AddEducationFormData, history: any) =>
  async (dispatch: Dispatch<ProfileAction>) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const res = await axios.put("/api/profile/education", formData, config);

      dispatch({
        type: ProfileActionTypes.UPDATE_PROFILE,
        payload: res.data
      });

      dispatchAlert(["Education added"], "success")(dispatch);
      history.push("/dashboard");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        dispatchAlert(
          errors.map((err: { msg: any }) => err.msg),
          "error"
        )(dispatch);
      }

      dispatch({
        type: ProfileActionTypes.PROFILE_ERROR,
        payload: errors
      });
    }
  };

/**
 * Handles deleting experience
 */
export const deleteExperience =
  (id: string) => async (dispatch: Dispatch<ProfileAction>) => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      try {
        const res = await axios.delete(`/api/profile/experience/${id}`);

        dispatch({
          type: ProfileActionTypes.UPDATE_PROFILE,
          payload: res.data
        });

        dispatchAlert(["Experience removed"], "success")(dispatch);
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

/**
 * Handles deleting education
 */
export const deleteEducation =
  (id: string) => async (dispatch: Dispatch<ProfileAction>) => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      try {
        const res = await axios.delete(`/api/profile/education/${id}`);

        dispatch({
          type: ProfileActionTypes.UPDATE_PROFILE,
          payload: res.data
        });

        dispatchAlert(["Education removed"], "success")(dispatch);
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

import { Dispatch } from "redux";
import axios from "axios";

import { PostActionTypes } from "../types";
import { PostAction } from "../actions";
import { dispatchAlert } from "./alert";

/**
 * Defines form data interface
 */
interface PostFormData {
  text: string;
}

/**
 * Handles clearing the posts
 */
const clearPost = () => async (dispatch: Dispatch<PostAction>) => {
  dispatch({ type: PostActionTypes.CLEAR_POST });
};

/**
 * Handles getting all the posts
 */
export const getPosts = () => async (dispatch: Dispatch<PostAction>) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: PostActionTypes.GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;

      dispatch({
        type: PostActionTypes.POST_ERROR,
        payload: errors
      });
    }
  }
};

/**
 * Handles getting a post by id
 */
export const getPostById =
  (id: string) => async (dispatch: Dispatch<PostAction>) => {
    clearPost()(dispatch);

    try {
      const res = await axios.get(`/api/posts/${id}`);

      dispatch({
        type: PostActionTypes.GET_POST,
        payload: res.data
      });
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: PostActionTypes.POST_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles adding a post
 */
export const addPost =
  (formData: PostFormData) => async (dispatch: Dispatch<PostAction>) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/posts", formData, config);

      dispatch({
        type: PostActionTypes.ADD_POST,
        payload: res.data
      });

      dispatchAlert(["Post created"], "success");
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: PostActionTypes.POST_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles deleting a post
 */
export const deletePost =
  (id: string) => async (dispatch: Dispatch<PostAction>) => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      try {
        await axios.delete(`/api/posts/${id}`);

        dispatch({
          type: PostActionTypes.DELETE_POST,
          payload: id
        });

        dispatchAlert(["Post removed"], "success");
      } catch (err) {
        if (err.response) {
          const errors = err.response.data.errors;

          dispatch({
            type: PostActionTypes.POST_ERROR,
            payload: errors
          });
        }
      }
    }
  };

/**
 * Handles adding a comment
 */
export const addComment =
  (postId: string, formData: PostFormData) =>
  async (dispatch: Dispatch<PostAction>) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        `/api/posts/comment/${postId}`,
        formData,
        config
      );

      dispatch({
        type: PostActionTypes.ADD_COMMENT,
        payload: res.data
      });

      dispatchAlert(["Comment Added"], "success");
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatchAlert(
          errors.map((err: { msg: any }) => err.msg),
          "error",
          3000
        )(dispatch);

        dispatch({
          type: PostActionTypes.POST_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles deleting a comment
 */
export const deleteComment =
  (postId: string, commentId: string) =>
  async (dispatch: Dispatch<PostAction>) => {
    try {
      const res = await axios.delete(
        `/api/posts/${postId}/comments/${commentId}`
      );

      dispatch({
        type: PostActionTypes.REMOVE_COMMENT,
        payload: res.data
      });

      dispatchAlert(["Comment Removed"], "success")(dispatch);
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: PostActionTypes.POST_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles adding a like
 */
export const addLike =
  (id: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      const res = await axios.put(`/api/posts/like/${id}`);

      dispatch({
        type: PostActionTypes.UPDATE_LIKES,
        payload: { id, likes: res.data }
      });
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: PostActionTypes.POST_ERROR,
          payload: errors
        });
      }
    }
  };

/**
 * Handles removing a like
 */
export const removeLike =
  (id: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      const res = await axios.put(`/api/posts/unlike/${id}`);

      dispatch({
        type: PostActionTypes.UPDATE_LIKES,
        payload: { id, likes: res.data }
      });
    } catch (err) {
      if (err.response) {
        const errors = err.response.data.errors;

        dispatch({
          type: PostActionTypes.POST_ERROR,
          payload: errors
        });
      }
    }
  };

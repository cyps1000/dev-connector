import { PostActionTypes, PostPayload, Comment, Like } from "../types";

/**
 * Defines the GetPostAction interface
 */
export interface GetPostAction {
  type: PostActionTypes.GET_POST;
  payload: PostPayload;
}

/**
 * Defines the DeletePostAction interface
 */
export interface DeletePostAction {
  type: PostActionTypes.DELETE_POST;
  payload: string;
}

/**
 * Defines the GetAllPostsAction interface
 */
export interface GetAllPostsAction {
  type: PostActionTypes.GET_POSTS;
  payload: PostPayload[];
}

/**
 * Defines the AddPostAction interface
 */
export interface AddPostAction {
  type: PostActionTypes.ADD_POST;
  payload: PostPayload;
}

/**
 * Defines the PostErrorAction interface
 */
export interface PostErrorAction {
  type: PostActionTypes.POST_ERROR;
  payload: {
    msg: string;
  }[];
}

/**
 * Defines the AddCommentAction interface
 */
export interface AddCommentAction {
  type: PostActionTypes.ADD_COMMENT;
  payload: Comment;
}

/**
 * Defines the DeleteCommentAction interface
 */
export interface DeleteCommentAction {
  type: PostActionTypes.REMOVE_COMMENT;
  payload: string;
}

/**
 * Defines the UpdateLikesAction interface
 */
export interface UpdateLikesAction {
  type: PostActionTypes.UPDATE_LIKES;
  payload: {
    likes: Like[];
  };
}

/**
 * Defines the general action types
 */
export type PostAction =
  | GetPostAction
  | DeletePostAction
  | GetAllPostsAction
  | AddPostAction
  | PostErrorAction
  | AddCommentAction
  | DeleteCommentAction
  | UpdateLikesAction;

/**
 * Defines the actions types for the Posts
 */
export enum PostActionTypes {
  GET_POSTS = "get_posts",
  GET_POST = "get_post",
  ADD_POST = "add_post",
  DELETE_POST = "delete_post",
  POST_ERROR = "post_error",
  UPDATE_LIKES = "update_likes",
  ADD_COMMENT = "add_comment",
  REMOVE_COMMENT = "remove_comment"
}

/**
 * Defines the Like interface
 */
export interface Like {
  _id: string;
  user: string;
}

/**
 * Defines the Comment interface
 */
export interface Comment {
  id: string;
  text: string;
  name: string;
  avatar: string;
  user: string;
  postId: string;
  date: string;
}

/**
 * Defines the PostPayload interface
 */
export interface PostPayload {
  id: string;
  text: string;
  name: string;
  avatar: string;
  user: string;
  likes: Like[];
  comments: Comment[];
  date: string;
}

import produce from "immer";

import { PostActionTypes, PostPayload } from "../types";
import { PostAction } from "../actions";

interface Posts {
  posts: PostPayload[];
  post: PostPayload | null;
  loading: boolean;
  errors?: {
    msg: string;
  }[];
}

const initialState: Posts = {
  posts: [],
  post: null,
  loading: true,
  errors: []
};

const reducer = produce(
  (state: Posts = initialState, action: PostAction): Posts => {
    switch (action.type) {
      case PostActionTypes.GET_POSTS:
        state.posts = action.payload;
        state.loading = false;
        return state;

      case PostActionTypes.GET_POST:
        state.post = action.payload;
        state.loading = false;
        return state;

      case PostActionTypes.ADD_POST:
        state.posts = [action.payload, ...state.posts];
        state.loading = false;
        return state;

      case PostActionTypes.DELETE_POST:
        state.posts = state.posts.filter((post) => post.id !== action.payload);
        state.loading = false;
        return state;

      case PostActionTypes.POST_ERROR:
        state.errors = action.payload;
        state.loading = false;
        return state;

      case PostActionTypes.UPDATE_LIKES:
        state.post!.likes = action.payload.likes;
        state.loading = false;
        return state;

      case PostActionTypes.ADD_COMMENT:
        state.post!.comments = [...state.post!.comments, { ...action.payload }];
        state.loading = false;
        return state;

      case PostActionTypes.REMOVE_COMMENT:
        state.post!.comments = state.post!.comments.filter(
          (comm) => comm.id !== action.payload
        );
        state.loading = false;
        return state;

      default:
        return state;
    }
  }
);

export default reducer;

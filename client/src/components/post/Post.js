import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PostItem from "../posts/PostItem";
import Spinner from "../layout/Spinner";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/posts" className="btn">
        Back to posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
        {post.comments.map((comm) => (
          <CommentItem key={comm._id} comment={comm} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);

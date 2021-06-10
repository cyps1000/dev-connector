import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

/**
 * Imports Components
 */
import Spinner from "../Spinner";
import PostItem from "../PostItem";
import CommentForm from "../CommentForm";
import CommentItem from "../CommentItem";

/**
 * Imports the component styles
 */
import { useStyles } from "./Post.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Defines the props interface
 */
export interface ParamTypes {
  id: string;
}

/**
 * Displays the component
 */
const Post: React.FC = () => {
  const { id } = useParams<ParamTypes>();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles getting the post and the comments
   */
  const { getPostById } = useActions();

  /**
   * Handles getting the post state
   */
  const { post, loading } = useTypedSelector((state) => state.post);

  useEffect(() => {
    getPostById(id);
  }, [getPostById, id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Container maxWidth="md" className={classes.container}>
      <Grid container>
        <Grid item lg={12}>
          <Button variant="outlined" className={classes.backButton}>
            <Link to="/posts">Back to Posts</Link>
          </Button>
        </Grid>
        <Grid item lg={12}>
          <PostItem post={post} showActions={false} />
          <CommentForm post={post} />
          {post.comments.length > 0 && (
            <Paper elevation={2} className={classes.paper}>
              {post.comments.map((comm, index) => (
                <CommentItem key={index} comment={comm} post={post} />
              ))}
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;

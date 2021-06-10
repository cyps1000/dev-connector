import { useEffect } from "react";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

/**
 * Imports Components
 */
import Spinner from "../Spinner";
import PostForm from "../PostForm";
import PostItem from "../PostItem";

/**
 * Imports the component styles
 */
import { useStyles } from "./Posts.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const Posts: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles getting the posts
   */
  const { getPosts } = useActions();

  /**
   * Handles getting the posts state
   */
  const { posts, loading } = useTypedSelector((state) => state.post);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" color="primary">
        Posts
      </Typography>
      <Typography
        variant="h5"
        color="textPrimary"
        className={classes.paragraph}
      >
        Welcome to the Community
      </Typography>
      <PostForm />
      {posts.map((post) => (
        <PostItem key={post.id} post={post} showActions={true} />
      ))}
    </Container>
  );
};

export default Posts;

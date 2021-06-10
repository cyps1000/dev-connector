import { Link } from "react-router-dom";

/**
 * External Imports
 */
import { format, parseISO } from "date-fns";
import clsx from "clsx";

/**
 * Imports Material UI Components
 */
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./PostItem.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Imports The Post Interface
 */
import { PostPayload } from "../../redux/types";

/**
 * Defines the props interface
 */
export interface PostItemProps {
  post: PostPayload;
  showActions: boolean;
}

/**
 * Displays the component
 */
const PostItem: React.FC<PostItemProps> = (props) => {
  const { post, showActions } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles adding / removing a like and deleting a post
   */
  const { addLike, removeLike, deletePost } = useActions();

  /**
   * Handles getting the auth state
   */
  const { loading, user } = useTypedSelector((state) => state.auth);

  const likePostAction = () => {
    if (post.likes.find((x) => x._id)) {
      removeLike(post.id);
    } else {
      addLike(post.id);
    }
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item lg={2} className={classes.grid}>
          <Box className={classes.user}>
            <Link to={`/profile/${post.user}`}>
              <Avatar src={post.avatar} className={classes.avatar} />
              <Typography variant="h6">{post.name}</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item lg={9}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              {post.text}
            </Typography>
            <Typography variant="subtitle2" color="textPrimary" gutterBottom>
              Posted on {format(parseISO(post.date), "MM/dd/yyyy")}
            </Typography>
          </Box>
          {showActions && (
            <Box className={classes.actionsButtons}>
              <Button
                variant="outlined"
                className={clsx(
                  classes.likePost,
                  !!post.likes.find((x) => x._id) && classes.likedPost
                )}
                onClick={likePostAction}
              >
                <FontAwesomeIcon icon={faThumbsUp} />
              </Button>
              <Badge
                badgeContent={post.comments.length}
                max={99}
                color="primary"
                className={classes.badgeIcon}
              >
                <Button variant="outlined" className={classes.discussion}>
                  <Link to={`/posts/${post.id}`}>
                    <FontAwesomeIcon
                      className={classes.commentIcon}
                      icon={faCommentDots}
                    />
                  </Link>
                </Button>
              </Badge>
            </Box>
          )}
          {post.likes.length > 0 && (
            <Typography variant="subtitle2" className={classes.likedBy}>
              Post liked by {post.likes.length}{" "}
              {post.likes.length > 1 ? "people" : "person"}
            </Typography>
          )}
        </Grid>
        <Grid item lg={1}>
          {!loading && post.user === user.id && (
            <Button
              variant="outlined"
              className={classes.deletePost}
              onClick={() => deletePost(post.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostItem;

/**
 * External Imports
 */
import { format, parseISO } from "date-fns";

/**
 * Imports Material UI Components
 */
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./CommentItem.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Imports The Comment Interface
 */
import { PostPayload, Comment } from "../../redux/types";
import { Typography } from "@material-ui/core";

/**
 * Defines the props interface
 */
export interface CommentItemProps {
  post: PostPayload;
  comment: Comment;
}

/**
 * Displays the component
 */
const CommentItem: React.FC<CommentItemProps> = (props) => {
  const { post, comment } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles getting the auth state
   */
  const { user, loading } = useTypedSelector((state) => state.auth);

  /**
   * Handles deleting a comment
   */
  const { deleteComment } = useActions();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item lg={2} className={classes.gridUser}>
          <Avatar src={comment.avatar} className={classes.avatar} />
          <Typography variant="subtitle2">{comment.name}</Typography>
        </Grid>
        <Grid item lg={9}>
          <Typography variant="subtitle1" gutterBottom>
            {comment.text}
          </Typography>
          <Typography variant="subtitle2" color="textPrimary">
            Posted on {format(parseISO(comment.date), "MM/dd/yyyy")}
          </Typography>
        </Grid>
        <Grid item lg={1}>
          {!loading && user.id === comment.user && (
            <Button
              variant="outlined"
              className={classes.deleteComm}
              onClick={() => deleteComment(post.id, comment.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentItem;

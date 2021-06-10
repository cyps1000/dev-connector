import { useState } from "react";

/**
 * Imports Material UI Components
 */
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

/**
 * Imports the component styles
 */
import { useStyles } from "./CommentForm.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Imports The Comment Interface
 */
import { PostPayload } from "../../redux/types";

/**
 * Defines the props interface
 */
export interface CommentFormProps {
  post: PostPayload;
}

/**
 * Displays the component
 */
const CommentForm: React.FC<CommentFormProps> = (props) => {
  const { post } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles adding a comment
   */
  const { addComment } = useActions();

  /**
   * Handles getting the user state
   */
  const { user } = useTypedSelector((state) => state.auth);

  /**
   * Init the input text hook
   */
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment(post.id, { text });
    setText("");
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item lg={2}>
          <Avatar src={user.avatar} className={classes.avatar} />
        </Grid>
        <Grid item xs={12} lg={10}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="text"
              name="text"
              label="Leave a comment"
              value={text}
              fullWidth
              multiline
              rowsMax={10}
              onChange={(e) => setText(e.target.value)}
            />
            <Grid item lg={12} className={classes.gridBtn}>
              <Button
                type="submit"
                disabled={!text}
                variant="outlined"
                value="Create Post"
                className={classes.postButton}
              >
                Comment
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommentForm;

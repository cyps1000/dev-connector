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
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./PostForm.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const PostForm: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles adding a post
   */
  const { addPost } = useActions();

  /**
   * Handles getting the state of the user
   */
  const { user } = useTypedSelector((state) => state.auth);

  /**
   * Init the text area state
   */
  const [text, setText] = useState("");

  /**
   * Handles submitting the form
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item lg={2}>
          <Avatar src={user.avatar} className={classes.avatar} />
        </Grid>
        <Grid item xs={12} lg={10}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="text"
              name="text"
              label="What's happening?"
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
                Post
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostForm;

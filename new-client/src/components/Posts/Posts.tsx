/**
 * Imports the component styles
 */
import { useStyles } from "./Posts.styles";

/**
 * Displays the component
 */
const Posts: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Posts Page</h1>
    </div>
  );
};

export default Posts;

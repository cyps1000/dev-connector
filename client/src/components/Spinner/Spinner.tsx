/**
 * Imports Material UI Components
 */
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * Imports the component styles
 */
import { useStyles } from "./Spinner.styles";

/**
 * Displays the component
 */
const Spinner: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;

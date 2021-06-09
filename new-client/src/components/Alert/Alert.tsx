/**
 * Imports Material UI Components
 */
import Snackbar from "@material-ui/core/Snackbar";

/**
 * External Imports
 */
import clsx from "clsx";

/**
 * Imports the component styles
 */
import { useStyles } from "./Alert.styles";

/**
 * Imports Hooks
 */
import { useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const Alert: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles getting the alert state
   */
  const { open, alert } = useTypedSelector((state) => state.alert);

  /**
   * Handles getting the snackbar classes
   */
  const getSnackbarClasses = () => {
    return {
      anchorOriginTopCenter: classes.anchor
    };
  };

  /**
   * Handles getting the snackbar content props
   */
  const getContentProps = () => {
    return {
      classes: {
        root: clsx(classes.root, {
          [classes.success]: alert.severity === "success",
          [classes.error]: alert.severity === "error"
        })
      }
    };
  };

  return (
    <Snackbar
      open={open}
      classes={getSnackbarClasses()}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      message={
        <ul>
          {alert.msg.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      }
      ContentProps={getContentProps()}
    />
  );
};

export default Alert;

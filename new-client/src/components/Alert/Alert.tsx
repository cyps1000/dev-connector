/**
 * Imports Material UI Components
 */
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

/**
 * Imports the component styles
 */
import { useStyles } from "./Alert.styles";

/**
 * Imports Hooks
 */
import { useTypedSelector } from "../../hooks";

function AlertSnackbar(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * Displays the component
 */
const Alert: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const { open, alert } = useTypedSelector((state) => state.alert);

  return (
    <div className={classes.root}>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <AlertSnackbar severity={alert.severity}>
          <ul>
            {alert.msg.map((msg) => (
              <li key={msg}>{msg}</li>
            ))}
          </ul>
        </AlertSnackbar>
      </Snackbar>
    </div>
  );
};

export default Alert;

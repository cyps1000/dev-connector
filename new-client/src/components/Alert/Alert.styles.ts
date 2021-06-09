/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 3,
    padding: "7px 14px",
    minHeight: 30,
    boxShadow: "none"
  },
  anchor: {
    top: 115
  },
  success: {
    backgroundColor: "#edfcf3",
    border: "1px solid #55ba85",
    color: "#55ba85"
  },
  error: {
    backgroundColor: "#ffefef",
    border: "1px solid #ff6363",
    color: "#ff6363"
  }
}));

export { useStyles };

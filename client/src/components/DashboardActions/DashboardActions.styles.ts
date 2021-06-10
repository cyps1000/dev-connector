/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: "1rem",
    marginRight: "1rem",
    backgroundColor: "#fff",
    "& a": {
      textDecoration: "none",
      color: "inherit"
    },
    color: "#7074e4",
    "&:hover": {
      backgroundColor: "#5d61ce",
      color: "#fff"
    }
  }
}));

export { useStyles };

/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: "7rem",
    height: "110vh"
  },
  paper: {
    backgroundColor: "#fff",
    color: "#7074e4",
    marginTop: "1rem",
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    paddingRight: "1rem"
  },
  backButton: {
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

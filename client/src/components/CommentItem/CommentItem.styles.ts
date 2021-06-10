/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: "2rem",
    height: "2rem"
  },
  gridUser: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "#0400ff8a",
    color: "#fff",
    marginTop: "1rem",
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingBottom: "1rem",
    paddingRight: "1rem"
  },
  deleteComm: {
    backgroundColor: "#fff",
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "#fff"
    }
  }
}));

export { useStyles };

/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    backgroundColor: "#8c8c8c7a",
    color: "#fff",
    marginTop: "1rem",
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingBottom: "1rem",
    paddingRight: "2rem"
  },
  gridBtn: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "1rem"
  },
  postButton: {
    backgroundColor: "#fff",
    color: "#3f51b5",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff"
    }
  },
  avatar: {
    width: "4rem",
    height: "4rem"
  }
}));

export { useStyles };

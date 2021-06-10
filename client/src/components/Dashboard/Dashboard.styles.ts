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
    marginTop: "7rem"
  },
  userIcon: {
    marginRight: "0.5rem",
    color: "#3f51b5"
  },
  deleteBtns: {
    marginTop: "4rem",
    "& button": {
      marginRight: "2rem",
      marginBottom: "1rem",
      backgroundColor: "#fff",
      "& a": {
        textDecoration: "none",
        color: "inherit"
      },
      color: "red",
      "&:hover": {
        backgroundColor: "red",
        color: "#fff"
      }
    }
  },
  deleteBtn: {
    marginTop: "0.5rem",
    marginLeft: "1rem",
    backgroundColor: "#fff",
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "#fff"
    }
  },
  createProfileBtn: {
    marginTop: "0.5rem",
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

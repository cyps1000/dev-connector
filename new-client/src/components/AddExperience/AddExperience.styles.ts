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
    height: "110vh",
    display: "flex",
    flexDirection: "column"
  },
  expIcon: {
    marginRight: "0.5rem",
    color: "#3f51b5"
  },
  form: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: "0.5rem",
      width: "100ch"
    }
  },
  buttonsBox: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    "& button": {
      marginRight: "2rem"
    }
  },
  goBackBtn: {
    "& a": {
      textDecoration: "none",
      color: "inherit"
    },
    color: "#D4A16A",
    "&:hover": {
      backgroundColor: "#D4A16A",
      color: "#fff"
    }
  },
  addExpBtn: {
    color: "#3f51b5",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff"
    }
  }
}));

export { useStyles };

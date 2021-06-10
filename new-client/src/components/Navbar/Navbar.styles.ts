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
    flexGrow: 1
  },
  navbar: {
    backgroundColor: "#3f51b5db",
    "& svg": {
      marginRight: "0.35rem"
    }
  },
  menuButton: {
    marginLeft: "auto"
  },
  menu: {
    display: "flex",
    alignItems: "center",
    flex: 3,
    justifyContent: "flex-end",
    "& svg": {
      marginRight: "0.35rem"
    },
    "& button": {
      margin: "0 10px",
      fontSize: 16,
      textTransform: "initial"
    }
  },
  paper: {
    background: "#3f51b5",
    color: theme.palette.common.white
  },
  list: {
    width: 205,
    display: "flex",
    justifyItems: "center",
    "& svg": {
      marginRight: "0.35rem"
    }
  }
}));

export { useStyles };

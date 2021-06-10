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
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    color: "#7074e4",
    marginTop: "0.8rem",
    marginRight: "1rem",
    marginLeft: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  grid: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center"
  },
  gridGithub: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "center",
    "& svg": {
      marginRight: "0.35rem"
    }
  }
}));

export { useStyles };

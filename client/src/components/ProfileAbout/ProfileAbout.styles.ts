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
    backgroundColor: "#f5f5f5",
    color: "#7074e4",
    marginTop: "0.6rem",
    marginBottom: "0.3rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  skills: {
    display: "flex",
    "& div": {
      paddingRight: "1rem"
    }
  },
  gridSkills: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    },
    "& svg": {
      marginRight: "0.35rem"
    }
  },
  skillsIcon: {
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
    "& svg": {
      color: "#7074e4",
      marginRight: "0.2rem"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bio: {
    fontSize: "1.25rem",
    textAlign: "center"
  },
  divider: {
    borderBottom: "#000 1px dotted",
    paddingTop: "1rem",
    paddingBottom: "1rem"
  }
}));

export { useStyles };

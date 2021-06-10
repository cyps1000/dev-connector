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
    backgroundColor: "#7074e4",
    color: "#fff",
    marginTop: "2rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
  avatar: {
    width: "7rem",
    height: "7rem"
  },
  profileName: {
    paddingTop: "1rem"
  },
  skills: {
    display: "flex",
    "& li": {
      paddingRight: "1rem"
    }
  },
  skillsIcon: {
    display: "flex",
    alignItems: "center",
    paddingRight: "1rem",
    "& svg": {
      color: "#fff",
      marginRight: "0.2rem"
    }
  },
  viewProfileBtn: {
    marginTop: "1rem",
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

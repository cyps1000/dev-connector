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
  expAndEdu: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-around"
  },
  experience: {
    backgroundColor: "#f5f5f5",
    color: "#7074e4",
    marginTop: "0.4rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "2rem"
  },
  editProfilesBtn: {
    marginLeft: "1rem",
    marginTop: "1rem",
    backgroundColor: "#fff",
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
  backProfilesBtn: {
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
  },
  noData: {
    paddingTop: "1rem",
    paddingLeft: "1rem"
  }
}));

export { useStyles };

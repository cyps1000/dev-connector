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
  gridSocials: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& svg": {
      fontSize: "2rem",
      margin: "0 0.3rem",
      color: "#fff",
      "& :hover": {
        color: "#bfbfbf"
      }
    }
  },
  avatar: {
    width: "10rem",
    height: "10rem"
  },
  profileName: {
    paddingTop: "1rem"
  },
  socials: {
    paddingTop: "0.8rem",

    "& svg": {
      fontSize: "2rem",
      marginRight: "1rem",
      color: "#fff",
      "& :hover": {
        color: "#bfbfbf"
      }
    }
  }
}));

export { useStyles };

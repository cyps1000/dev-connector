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
    backgroundColor: "#bfbfbf",
    color: "#7074e4",
    marginTop: "0.4rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  skills: {
    display: "flex",
    "& div": {
      paddingRight: "1rem",
      "& svg": {
        color: "#fff",
        marginRight: "0.2rem",
      },
    },
  },
  skillsIcon: {
    display: "flex",
    alignItems: "center",
  },
  bio: {
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };

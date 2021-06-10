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
  paragraph: {
    marginTop: "1rem",
    "& svg": {
      marginRight: "0.35rem",
      color: "#3f51b5"
    }
  }
}));

export { useStyles };

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
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column"
  },
  paragraph: {
    marginTop: "1rem",
    "& svg": {
      marginRight: "0.35rem",
      color: "#3f51b5"
    }
  },
  noProfileFound: {
    paddingTop: "1.5rem",
    paddingLeft: "1rem"
  }
}));

export { useStyles };

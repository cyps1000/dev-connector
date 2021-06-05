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
    borderBottom: "#ccc 1px dotted",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    "&:last-of-type": {
      borderBottom: "none"
    }
  }
}));

export { useStyles };

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
    marginTop: "3rem"
  },
  table: {
    minWidth: 550
  },
  deleteButton: {
    color: "red"
  },
  tableData: {
    "& td": {
      color: "#3f51b5"
    }
  }
}));

export { useStyles };

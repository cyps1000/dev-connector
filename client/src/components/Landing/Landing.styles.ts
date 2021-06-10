/**
 *  Material UI Imports
 * @see https://material-ui.com/styles/basics/
 */
import { makeStyles, Theme } from "@material-ui/core/styles";
/**
 * Assets Imports
 */
import image from "./showcase.png";

/**
 * Styles the component
 */
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%"
  },
  darkOverLay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "#fff"
  },
  title: {
    color: "#fff",
    paddingTop: "20rem"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttons: {
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "& > *": {
      margin: "0 0.5rem"
    }
  }
}));

export { useStyles };

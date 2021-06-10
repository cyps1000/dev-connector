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
    backgroundColor: "#fff",
    color: "#7074e4",
    marginTop: "2rem",
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingBottom: "2rem",
    paddingRight: "2rem"
  },
  avatar: {
    width: "6rem",
    height: "6rem"
  },
  user: {
    "& a": {
      textDecoration: "none",
      color: "inherit"
    }
  },
  badgeIcon: {
    "& .MuiBadge-anchorOriginTopRightRectangle": {
      top: "0.8rem",
      right: "-0.3rem"
    }
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  actionsButtons: {
    paddingTop: "1rem",
    "& button": {
      marginRight: "0.5rem"
    }
  },
  deletePost: {
    backgroundColor: "#fff",
    color: "red",
    "&:hover": {
      backgroundColor: "red",
      color: "#fff"
    }
  },
  likePost: {
    backgroundColor: "#fff",
    color: "#3f51b5",
    "&:hover": {
      backgroundColor: "#3f51b5b8",
      color: "#fff"
    }
  },
  likedPost: {
    backgroundColor: "#3f51b5",
    color: "#fff"
  },
  discussion: {
    color: "#D4A16A",
    padding: "0.3rem 3rem",
    "&:hover": {
      backgroundColor: "#D4A16A",
      color: "#fff"
    },
    "& a": {
      textDecoration: "none",
      color: "inherit"
    }
  },
  commentIcon: {
    fontSize: "1rem"
  },
  likedBy: {
    paddingTop: "1rem"
  }
}));

export { useStyles };

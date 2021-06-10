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
    height: "110vh",
    display: "flex",
    flexDirection: "column"
  },
  userIcon: {
    marginRight: "0.5rem",
    color: "#3f51b5"
  },
  toggleSocialsBtn: {
    marginTop: "1rem",
    marginBottom: "0.5rem",
    backgroundColor: "#fff",
    color: "#3f51b5",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff"
    }
  },
  buttonsBox: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    "& button": {
      marginRight: "2rem"
    }
  },
  goBackBtn: {
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
  createProfileBtn: {
    color: "#3f51b5",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff"
    }
  },
  twitterIcon: {
    color: "#1da1f2"
  },
  facebookIcon: {
    color: "#1877f2"
  },
  linkedinIcon: {
    color: "#0a66c2"
  },
  youtubeIcon: {
    color: "#ff0000"
  },
  instagramIcon: {
    color: "#f5c265"
  },
  socialInput: {
    display: "flex",
    "& svg": {
      marginTop: "1.5rem",
      marginRight: "1rem"
    }
  },
  form: {
    marginTop: theme.spacing(1),
    "& .MuiTextField-root": {
      margin: "0.5rem",
      width: "100ch"
    }
  }
}));

export { useStyles };

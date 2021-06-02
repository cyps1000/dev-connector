import Link from "@material-ui/core/Link";
/**
 * Imports Material UI Components
 */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Imports Hooks
 */
import { useActions } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Navbar.styles";

/**
 * Displays the component
 */
const Navbar: React.FC = (props) => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const { logout, dispatchAlert } = useActions();

  const logoutUser = () => {
    logout();
    dispatchAlert(["Logged out successfully!"], "success", 3000);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">
            <Link color="inherit" href="/dashboard/posts">
              Posts
            </Link>
          </Button>
          <Button color="inherit" onClick={logoutUser}>
            <Link color="inherit" href="/login">
              Logout
            </Link>
          </Button>
          <Button color="inherit">
            <Link color="inherit" href="/login">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

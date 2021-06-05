import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
/**
 * Imports Material UI Components
 */
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUsers,
  faUserPlus,
  faSignInAlt,
  faPowerOff,
  faNewspaper,
  faThLarge
} from "@fortawesome/free-solid-svg-icons";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

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

  /**
   * Init the useTheme hook
   */
  const theme = useTheme();

  /**
   * Handles the mobile view
   */
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  /**
   * Handles the tablet view
   */
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  /**
   * Init the Drawer state
   */
  const [open, setOpen] = useState(false);

  /**
   * Handles routing
   */
  const routeTo = (url: string) => {
    history.push(url);
  };

  /**
   * Defines the routing functions
   */
  const goToHome = () => routeTo("/");
  const goToLogin = () => routeTo("/login");
  const goToRegister = () => routeTo("/register");
  const goToDevelopersPublic = () => routeTo("/profiles");
  const goToDevelopers = () => routeTo("/dashboard/profiles");
  const goToPosts = () => routeTo("/dashboard/posts");
  const goToDashboard = () => routeTo("/dashboard");

  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Init the logout action
   */
  const { logout } = useActions();

  /**
   * Init the auth state
   */
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  /**
   * Handles opening the Drawer
   */
  const openDrawer = () => setOpen(true);

  /**
   * Handles closing the Drawer
   */
  const closeDrawer = () => setOpen(false);

  /**
   * The menu will appear only to unauthenticated users
   */
  const guestLinks = (
    <Fragment>
      <Button color="inherit" onClick={goToDevelopersPublic}>
        <FontAwesomeIcon icon={faUsers} />
        Developers
      </Button>
      <Button color="inherit" onClick={goToRegister}>
        <FontAwesomeIcon icon={faUserPlus} />
        Register
      </Button>
      <Button color="inherit" onClick={goToLogin}>
        <FontAwesomeIcon icon={faSignInAlt} />
        Login
      </Button>
    </Fragment>
  );

  /**
   * The menu will appear only to unauthenticated users (MOBILE)
   */
  const guestLinksMobile = (
    <List>
      <ListItem button onClick={goToDevelopersPublic}>
        <FontAwesomeIcon icon={faUsers} />
        <ListItemText primary="Developers" />
      </ListItem>
      <Divider />
      <ListItem button onClick={goToRegister}>
        <FontAwesomeIcon icon={faUserPlus} />
        <ListItemText primary="Register" />
      </ListItem>
      <Divider />
      <ListItem button onClick={goToLogin}>
        <FontAwesomeIcon icon={faSignInAlt} />
        <ListItemText primary="Login" />
      </ListItem>
      <Divider />
    </List>
  );

  /**
   * The menu will appear only to authenticated users
   */
  const authLinks = (
    <Fragment>
      <Button color="inherit" onClick={goToDevelopers}>
        <FontAwesomeIcon icon={faUsers} />
        Developers
      </Button>
      <Button color="inherit" onClick={goToPosts}>
        <FontAwesomeIcon icon={faNewspaper} /> Posts
      </Button>
      <Button color="inherit" onClick={goToDashboard}>
        <FontAwesomeIcon icon={faThLarge} />
        Dashboard
      </Button>
      <Button color="inherit" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} />
        Logout
      </Button>
    </Fragment>
  );

  /**
   * The menu will appear only to authenticated users (MOBILE)
   */
  const authLinksMobile = (
    <List>
      <ListItem button onClick={goToDevelopers}>
        <FontAwesomeIcon icon={faUsers} />
        <ListItemText primary="Developers" />
      </ListItem>
      <ListItem button onClick={goToPosts}>
        <FontAwesomeIcon icon={faNewspaper} />
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem button onClick={goToDashboard}>
        <FontAwesomeIcon icon={faThLarge} />
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} />
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );

  /**
   * Handles the mobile view
   */
  if (isMobile || isTablet) {
    return (
      <Box className={classes.root}>
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={goToHome}
            >
              <FontAwesomeIcon icon={faCode} />
              <Typography variant="h5">DevConnector</Typography>
            </IconButton>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          data-testid="navbar-drawer-mobile"
          anchor="right"
          open={open}
          onClose={closeDrawer}
          classes={{
            paper: classes.paper
          }}
        >
          <Box className={classes.list} data-testid="navbar-list-container">
            {isAuthenticated ? authLinksMobile : guestLinksMobile}
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={goToHome}
          >
            <FontAwesomeIcon icon={faCode} />
            <Typography variant="h5">DevConnector</Typography>
          </IconButton>
          <Box className={classes.menu}>
            {isAuthenticated ? authLinks : guestLinks}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

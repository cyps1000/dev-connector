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
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

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
        <AccountBoxOutlinedIcon />
        Developers
      </Button>
      <Button color="inherit" onClick={goToRegister}>
        <LockOutlinedIcon />
        Register
      </Button>
      <Button color="inherit" onClick={goToLogin}>
        <LockOpenOutlinedIcon />
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
        <AccountBoxOutlinedIcon />
        <ListItemText primary="Developers" />
      </ListItem>
      <Divider />
      <ListItem button onClick={goToRegister}>
        <LockOutlinedIcon />
        <ListItemText primary="Register" />
      </ListItem>
      <Divider />
      <ListItem button onClick={goToLogin}>
        <LockOpenOutlinedIcon />
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
        <AccountBoxOutlinedIcon />
        Developers
      </Button>
      <Button color="inherit" onClick={goToPosts}>
        <DescriptionOutlinedIcon /> Posts
      </Button>
      <Button color="inherit" onClick={goToDashboard}>
        <DashboardOutlinedIcon />
        Dashboard
      </Button>
      <Button color="inherit" onClick={logout}>
        <ExitToAppOutlinedIcon />
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
        <AccountBoxOutlinedIcon />
        <ListItemText primary="Developers" />
      </ListItem>
      <ListItem button onClick={goToPosts}>
        <DescriptionOutlinedIcon />
        <ListItemText primary="Posts" />
      </ListItem>
      <ListItem button onClick={goToDashboard}>
        <DashboardOutlinedIcon />
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={logout}>
        <ExitToAppOutlinedIcon />
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
              <CodeOutlinedIcon />
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
            paper: classes.paper,
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
            <CodeOutlinedIcon />
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

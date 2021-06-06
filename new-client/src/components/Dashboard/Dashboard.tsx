import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

/**
 * Imports Components
 */
import Spinner from "../Spinner";
import DashboardActions from "../DashboardActions";
import Experience from "../Experience";
import Education from "../Education";

/**
 * Imports the component styles
 */
import { useStyles } from "./Dashboard.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const Dashboard: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles getting the current profile
   */
  const { getCurrentProfile } = useActions();

  /**
   * Handles deleting the profile
   */
  const { deleteProfile } = useActions();

  /**
   * Handles deleting the account, including the profile,
   * posts and comments.
   */
  const { deleteAccount } = useActions();

  /**
   * Handles getting the user state
   */
  const { user } = useTypedSelector((state) => state.auth);

  /**
   * Handles getting the profile state
   */
  const { profile, loading } = useTypedSelector((state) => state.profile);

  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" color="primary" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        <FontAwesomeIcon icon={faUser} className={classes.userIcon} />
        Welcome, {user && user.name}
      </Typography>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <Experience profile={profile} />
          <Education profile={profile} />
          <Box className={classes.deleteBtns}>
            <Button variant="outlined" onClick={() => deleteAccount()}>
              Delete Account
            </Button>
            <Button variant="outlined" onClick={() => deleteProfile()}>
              Delete Profile
            </Button>
          </Box>
        </Fragment>
      ) : (
        <div>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            You have not yet set up a profile, please add some info
          </Typography>
          <Button variant="outlined" className={classes.createProfileBtn}>
            <Link to="/create-profile">Create Profile</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;

import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/**
 * Imports Components
 */
import Spinner from "../Spinner";

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
        Welcome, {user && user.name.trim().split(" ")[0]}
      </Typography>
      {profile !== null ? (
        <Typography>shet to be added</Typography>
      ) : (
        <div>
          <Typography>
            You have not yet set up a profile, please add some info
          </Typography>
          <Button variant="outlined">
            <Link to="/dashboard/create-profile">Create Profile</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;

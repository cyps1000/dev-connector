import { useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

/**
 * Imports Components
 */
import ProfileTop from "../ProfileTop";
import ProfileAbout from "../ProfileAbout";
import Spinner from "../Spinner";

/**
 * Imports the component styles
 */
import { useStyles } from "./Profile.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

interface ParamTypes {
  id: string;
}

/**
 * Displays the component
 */
const Profile: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the useActions hook
   */
  const { getProfileById } = useActions();

  /**
   * Init the useTypedSelector hook
   */
  const { profile, loading } = useTypedSelector((state) => state.profile);
  const { isAuthenticated, user } = useTypedSelector((state) => state.auth);
  const loadingAuth = useTypedSelector((state) => state.auth.loading);

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <Container maxWidth="md" className={classes.container}>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Button variant="outlined" className={classes.backProfilesBtn}>
            <Link to="/profiles">Back to Profiles</Link>
          </Button>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
        </Fragment>
      )}
    </Container>
  );
};

export default Profile;

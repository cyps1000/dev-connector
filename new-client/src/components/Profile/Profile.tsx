import { useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

/**
 * Imports Components
 */
import ProfileTop from "../ProfileTop";
import ProfileAbout from "../ProfileAbout";
import ProfileExperience from "../ProfileExperience";
import ProfileEducation from "../ProfileEducation";
import ProfileGithub from "../ProfileGithub";
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
          {isAuthenticated &&
            loadingAuth === false &&
            user.id === profile.user.id && (
              <Button variant="outlined" className={classes.editProfilesBtn}>
                <Link to="/edit-profile">Edit Profile</Link>
              </Button>
            )}

          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Paper elevation={4} className={classes.experience}>
                <Typography variant="h4">Experience</Typography>
                {profile.experience.length > 0 ? (
                  <Fragment>
                    {profile.experience.map((exp, index) => (
                      <ProfileExperience key={index} profile={exp} />
                    ))}
                  </Fragment>
                ) : (
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.noData}
                  >
                    No experience credentials
                  </Typography>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Paper elevation={4} className={classes.experience}>
                <Typography variant="h4">Education</Typography>
                {profile.education.length > 0 ? (
                  <Fragment>
                    {profile.education.map((edu, index) => (
                      <ProfileEducation key={index} profile={edu} />
                    ))}
                  </Fragment>
                ) : (
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.noData}
                  >
                    No education credentials
                  </Typography>
                )}
              </Paper>
            </Grid>
            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </Grid>
        </Fragment>
      )}
    </Container>
  );
};

export default Profile;

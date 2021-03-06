import { useEffect } from "react";

/**
 * Imports Material UI Components
 */
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports Components
 */
import Spinner from "../Spinner";
import ProfileItem from "../ProfileItem";

/**
 * Imports the component styles
 */
import { useStyles } from "./Profiles.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const Profiles: React.FC = () => {
  /**
   * Init the useActions Hook
   */
  const { getProfiles } = useActions();

  /**
   * Init the useTypedSelector hook
   */
  const { profiles, loading } = useTypedSelector((state) => state.profile);

  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line
  }, []);

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return loading ? (
    <Spinner />
  ) : (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={0} className={classes.container}>
        <Grid item lg={12}>
          <Typography variant="h3" color="primary">
            Developers
          </Typography>
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.paragraph}
          >
            <FontAwesomeIcon icon={faConnectdevelop} />
            Browse & Connect with Developers
          </Typography>
        </Grid>
        <Grid item lg={12}>
          {profiles.length > 0 ? (
            profiles.map((profile, index) => (
              <ProfileItem key={index} profile={profile} />
            ))
          ) : (
            <Typography variant="h6" className={classes.noProfileFound}>
              No profiles found.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profiles;

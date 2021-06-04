import { Fragment, useEffect } from "react";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

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

  return (
    <Container maxWidth="md" className={classes.container}>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Typography variant="h3" color="primary">
            Developers
          </Typography>
          <Typography
            variant="h5"
            color="textPrimary"
            className={classes.paragraph}
          >
            <AccountTreeOutlinedIcon />
            Browse & Connect with Developers
          </Typography>
          {profiles.length > 0 ? (
            profiles.map((profile, index) => (
              <ProfileItem key={index} profile={profile} />
            ))
          ) : (
            <Typography variant="h6" className={classes.noProfileFound}>
              No profiles found.
            </Typography>
          )}
        </Fragment>
      )}
    </Container>
  );
};

export default Profiles;

import { Fragment, useEffect } from "react";

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
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfileItem key={profile.id} profile={profile} />
            ))
          ) : (
            <h4>No profiles found</h4>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;

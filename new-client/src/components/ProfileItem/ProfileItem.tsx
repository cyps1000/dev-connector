/**
 * Imports the component styles
 */
import { useStyles } from "./ProfileItem.styles";

/**
 * Imports The Profile Interface
 */
import { ProfilePayload } from "../../redux/types";

/**
 * Defines the interface for the component's props
 */
interface ProfileItemProps {
  profile: ProfilePayload;
}

/**
 * Displays the component
 */
const ProfileItem: React.FC<ProfileItemProps> = (props) => {
  const { profile } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <>
      <img src={profile.user.avatar} alt="" className="round-img" />
      <h2>{profile.user.name}</h2>
      <p>
        {profile.status} at {profile.company}
      </p>
    </>
  );
};

export default ProfileItem;

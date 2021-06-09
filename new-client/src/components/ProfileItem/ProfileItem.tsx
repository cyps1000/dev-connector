import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import Typography from "@material-ui/core/Typography";

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
    <Paper elevation={0} className={classes.paper}>
      <Avatar src={profile.user.avatar} className={classes.avatar} />
      <Typography variant="h4" className={classes.profileName} gutterBottom>
        {profile.user.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {profile.status} {profile.company && <span> at {profile.company}</span>}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {profile.location && <Box>{profile.location}</Box>}
      </Typography>
      <Typography className={classes.skills} gutterBottom>
        {profile.skills.slice(0, 5).map((skill, index) => (
          <Box component="li" key={index} className={classes.skillsIcon}>
            <CheckOutlinedIcon />
            {skill.toUpperCase()}
          </Box>
        ))}
      </Typography>

      <Button variant="outlined" className={classes.viewProfileBtn}>
        <Link to={`/profile/${profile.user.id}`}>View Profile</Link>
      </Button>
    </Paper>
  );
};

export default ProfileItem;

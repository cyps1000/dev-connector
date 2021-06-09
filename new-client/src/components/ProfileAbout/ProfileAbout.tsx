/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";

/**
 * Imports the component styles
 */
import { useStyles } from "./ProfileAbout.styles";

/**
 * Imports The Profile Interface
 */
import { ProfilePayload } from "../../redux/types";

/**
 * Defines the props interface
 */
export interface ProfileTopProps {
  profile: ProfilePayload;
}

/**
 * Displays the component
 */
const ProfileAbout: React.FC<ProfileTopProps> = (props) => {
  const { profile } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.paper}>
      {profile.bio && (
        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h4" gutterBottom>
            {profile.user.name.trim().split(" ")[0]}'s Bio
          </Typography>
          <Typography variant="h6" className={classes.bio} color="textPrimary">
            {profile.bio}
          </Typography>
        </Container>
      )}
      <Divider className={classes.divider} />
      <Typography variant="h4" gutterBottom>
        Skill Set
      </Typography>
      <Typography className={classes.skills} gutterBottom color="textPrimary">
        {profile.skills.slice(0, 5).map((skill, index) => (
          <Box component="li" key={index} className={classes.skillsIcon}>
            <CheckOutlinedIcon />
            {skill.toUpperCase()}
          </Box>
        ))}
      </Typography>
    </Paper>
  );
};

export default ProfileAbout;

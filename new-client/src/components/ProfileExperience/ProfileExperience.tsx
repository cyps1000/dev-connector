import { format, parseISO } from "date-fns";

/**
 * Imports Material UI Components
 */
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

/**
 * Imports the component styles
 */
import { useStyles } from "./ProfileExperience.styles";

/**
 * Imports The Profile Interface
 */
import { Experience } from "../../redux/types";

/**
 * Defines the props interface
 */
export interface ProfileExperienceProps {
  profile: Experience;
}

/**
 * Displays the component
 */
const ProfileExperience: React.FC<ProfileExperienceProps> = (props) => {
  const { profile } = props;
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h5" gutterBottom>
        {profile.company}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        {format(parseISO(profile.from), "MM/dd/yyyy")} -{" "}
        {!profile.to ? "Now" : format(parseISO(profile.to), "MM/dd/yyyy")}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        <strong>Position</strong>: {profile.title}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        <strong>Description</strong>: {profile.description}
      </Typography>
    </Box>
  );
};

export default ProfileExperience;

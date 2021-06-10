import { format, parseISO } from "date-fns";

/**
 * Imports Material UI Components
 */
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

/**
 * Imports the component styles
 */
import { useStyles } from "./ProfileEducation.styles";

/**
 * Imports The Profile Interface
 */
import { Education } from "../../redux/types";

/**
 * Defines the props interface
 */
export interface ProfileEducationProps {
  profile: Education;
}

/**
 * Displays the component
 */
const ProfileEducation: React.FC<ProfileEducationProps> = (props) => {
  const { profile } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h5" gutterBottom>
        {profile.school}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        {format(parseISO(profile.from), "MM/dd/yyyy")} -{" "}
        {!profile.to ? "Now" : format(parseISO(profile.to), "MM/dd/yyyy")}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        <strong>Degree</strong>: {profile.degree}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        <strong>Field of study</strong>: {profile.fieldofstudy}
      </Typography>
      <Typography variant="h6" gutterBottom color="textPrimary">
        <strong>Description</strong>: {profile.description}
      </Typography>
    </Box>
  );
};

export default ProfileEducation;

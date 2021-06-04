/**
 * Imports Material UI Components
 */
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";

/**
 * Imports the component styles
 */
import { useStyles } from "./ProfileTop.styles";

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
const ProfileTop: React.FC<ProfileTopProps> = (props) => {
  const { profile } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <Avatar src={profile.user.avatar} className={classes.avatar} />
      <Typography variant="h3" className={classes.profileName} gutterBottom>
        {profile.user.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {profile.status} {profile.company && <span> at {profile.company}</span>}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {profile.location && <Box>{profile.location}</Box>}
      </Typography>
      <Box className={classes.socials}>
        {profile.website && (
          <Link href={profile.website}>
            <LanguageOutlinedIcon />
          </Link>
        )}
        {profile.social?.instagram && (
          <Link href={profile.social.instagram}>
            <TwitterIcon />
          </Link>
        )}
        {profile.social?.facebook && (
          <Link href={profile.social.facebook}>
            <FacebookIcon />
          </Link>
        )}
        {profile.social?.linkedin && (
          <Link href={profile.social.linkedin}>
            <LinkedInIcon />
          </Link>
        )}
        {profile.social?.youtube && (
          <Link href={profile.social.youtube}>
            <YouTubeIcon />
          </Link>
        )}
        {profile.social?.instagram && (
          <Link href={profile.social.instagram}>
            <InstagramIcon />
          </Link>
        )}
      </Box>
    </Paper>
  );
};

export default ProfileTop;

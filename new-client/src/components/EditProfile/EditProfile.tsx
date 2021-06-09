import { Fragment, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./EditProfile.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Defines the props interface
 */
export interface EditProfileProps {
  history?: History;
}

/**
 * Displays the component
 */
const EditProfile: React.FC<EditProfileProps> = (props) => {
  const { history } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles creating and getting the profile
   */
  const { createProfile, getCurrentProfile } = useActions();

  /**
   * Handles getting the profile state
   */
  const { profile, loading } = useTypedSelector((state) => state.profile);

  /**
   * Defines the default state of the form
   */
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  /**
   * Gets the values from formData
   */
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  /**
   * Defines the default statuses
   */
  const statuses = [
    {
      value: "Developer",
      label: "Developer"
    },
    {
      value: "Junior Developer",
      label: "Junior Developer"
    },
    {
      value: "Senior Developer",
      label: "Senior Developer"
    },
    {
      value: "Manager",
      label: "Manager"
    },
    {
      value: "Student or Learning",
      label: "Student or Learning"
    },
    {
      value: "Instructor",
      label: "Instructor or Teacher"
    },
    {
      value: "Intern",
      label: "Intern"
    },
    {
      value: "Other",
      label: "Other"
    }
  ];

  /**
   * Handles showing/hiding the social inputs
   */
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile?.company ? "" : profile.company,
      website: loading || !profile?.website ? "" : profile.website,
      location: loading || !profile?.location ? "" : profile.location,
      status: loading || !profile?.status ? "" : profile.status,
      skills: loading || !profile?.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile?.githubusername ? "" : profile.githubusername,
      bio: loading || !profile?.bio ? "" : profile.bio,
      twitter: loading || !profile?.social ? "" : profile.social.twitter,
      facebook: loading || !profile?.social ? "" : profile.social.facebook,
      linkedin: loading || !profile?.social ? "" : profile.social.linkedin,
      youtube: loading || !profile?.social ? "" : profile.social.youtube,
      instagram: loading || !profile?.social ? "" : profile.social.instagram
    });
    // eslint-disable-next-line
  }, [loading, getCurrentProfile]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.container}>
        <Grid item lg={12}>
          <Typography variant="h4" color="primary" gutterBottom>
            Create Your Profile
          </Typography>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            <FontAwesomeIcon icon={faUser} className={classes.userIcon} />
            Let's get some information to make your profile stand out
          </Typography>
          <Typography>* = required field</Typography>
        </Grid>
        <Grid item lg={12}>
          <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
            <TextField
              id="select-status"
              select
              label="* Select Professional Status"
              value={status}
              fullWidth
              onChange={onChange}
              helperText="Give us an idea of where you are at in your career"
            >
              {statuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="company"
              label="Company"
              type="text"
              name="company"
              value={company}
              fullWidth
              helperText="Could be your own company or one you work for"
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="website"
              label="Website"
              type="text"
              name="website"
              value={website}
              fullWidth
              helperText="Could be your own or a company website"
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="location"
              label="Location"
              type="text"
              name="location"
              value={location}
              fullWidth
              helperText="City & state suggested (eg. Boston, MA)"
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="skills"
              label="* Skills"
              type="text"
              name="skills"
              value={skills}
              fullWidth
              helperText="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="githubusername"
              label="GitHub Username"
              type="text"
              name="githubusername"
              value={githubusername}
              fullWidth
              helperText="If you want your latest repos and a Github link, include your username"
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="bio"
              label="A short bio of yourself"
              type="text"
              name="bio"
              value={bio}
              fullWidth
              helperText="Tell us a little about yourself"
              multiline
              rows={4}
              onChange={(e) => onChange(e)}
            />
            <Box>
              <Button
                type="button"
                variant="outlined"
                className={classes.toggleSocialsBtn}
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
              >
                Add Social Network Links
              </Button>
              <Typography>(Optional)</Typography>
            </Box>

            {displaySocialInputs && (
              <Fragment>
                <Box className={classes.socialInput}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    className={classes.twitterIcon}
                  />
                  <TextField
                    id="twitter"
                    label="Twitter URL"
                    type="text"
                    name="twitter"
                    value={twitter}
                    fullWidth
                    onChange={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.socialInput}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                    className={classes.facebookIcon}
                  />
                  <TextField
                    id="facebook"
                    label="Facebook URL"
                    type="text"
                    name="facebook"
                    value={facebook}
                    fullWidth
                    onChange={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.socialInput}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className={classes.linkedinIcon}
                  />
                  <TextField
                    id="linkedin"
                    label="Linked URL"
                    type="text"
                    name="linkedin"
                    value={linkedin}
                    fullWidth
                    onChange={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.socialInput}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    className={classes.youtubeIcon}
                  />
                  <TextField
                    id="youtube"
                    label="Youtube URL"
                    type="text"
                    name="youtube"
                    value={youtube}
                    fullWidth
                    onChange={(e) => onChange(e)}
                  />
                </Box>
                <Box className={classes.socialInput}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className={classes.instagramIcon}
                  />
                  <TextField
                    id="instagram"
                    label="Instagram URL"
                    type="text"
                    name="instagram"
                    value={instagram}
                    fullWidth
                    onChange={(e) => onChange(e)}
                  />
                </Box>
              </Fragment>
            )}
            <Box className={classes.buttonsBox}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                value="Create Profile"
                className={classes.createProfileBtn}
              >
                Create Profile
              </Button>
              <Button variant="outlined" className={classes.goBackBtn}>
                <Link to="/dashboard">Go Back</Link>
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProfile;

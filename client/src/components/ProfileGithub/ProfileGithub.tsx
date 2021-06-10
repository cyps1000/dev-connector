import { useEffect } from "react";

/**
 * Imports Material UI Components
 */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faEye, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./ProfileGithub.styles";

/**
 * Imports Hooks
 */
import { useActions, useTypedSelector } from "../../hooks";

/**
 * Defines the props interface
 */
export interface ProfileGithubProps {
  username: string;
}

/**
 * Displays the component
 */
const ProfileGithub: React.FC<ProfileGithubProps> = (props) => {
  const { username } = props;

  /**
   * Handles getting the GitHub Repos
   */
  const { getGithubRepos } = useActions();

  useEffect(() => {
    getGithubRepos(username);
    // eslint-disable-next-line
  }, [getGithubRepos]);

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles getting the profile state
   */
  const { repos } = useTypedSelector((state) => state.profile);

  return (
    <Grid container spacing={2} className={classes.container}>
      {repos &&
        repos.map((repo, index) => (
          <Paper key={index} elevation={4} className={classes.paper}>
            <Grid item xs={12} lg={10} className={classes.grid}>
              <Typography gutterBottom>
                <Link href={repo.html_url}>{repo.name}</Link>
              </Typography>
              {repo.description !== null ? (
                <Typography>{repo.description}</Typography>
              ) : (
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  gutterBottom
                >
                  No description available.
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} lg={2} className={classes.gridGithub}>
              <Box>
                <FontAwesomeIcon icon={faStar} />
                {repo.stargazers_count}
              </Box>
              <Box>
                <FontAwesomeIcon icon={faEye} />
                {repo.watchers_count}
              </Box>
              <Box>
                <FontAwesomeIcon icon={faCodeBranch} />
                {repo.forks_count}
              </Box>
            </Grid>
          </Paper>
        ))}
    </Grid>
  );
};

export default ProfileGithub;

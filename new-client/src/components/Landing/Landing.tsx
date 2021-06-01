import { useHistory } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

/**
 * Imports the component styles
 */
import { useStyles } from "./Landing.styles";

/**
 * Displays the component
 */
const Landing: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Gets the history object
   */
  const history = useHistory();

  /**
   * Handles routing
   */
  const routeTo = (url: string) => {
    history.push(url);
  };

  /**
   * Defines the routing functions
   */
  const goToLogin = () => routeTo("/login");
  const goToRegister = () => routeTo("/register");

  return (
    <div className={classes.root}>
      <div className={classes.darkOverLay}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            {"Developer Connector"}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {
              "Create Link developer profile/portfolio, share posts and get help from other developers"
            }
          </Typography>
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={goToRegister}>
              {"Sign Up"}
            </Button>
            <Button variant="contained" onClick={goToLogin}>
              {"Sign In"}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Landing;

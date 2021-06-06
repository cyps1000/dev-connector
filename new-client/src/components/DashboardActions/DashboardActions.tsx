import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./DashboardActions.styles";

/**
 * Displays the component
 */
const DashboardActions: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <Box>
      <Button variant="outlined" className={classes.button}>
        <Link to="/edit-profile">
          <FontAwesomeIcon icon={faUserCircle} /> Edit Profile
        </Link>
      </Button>
      <Button variant="outlined" className={classes.button}>
        <Link to="/add-experience">
          <FontAwesomeIcon icon={faBlackTie} /> Add Experience
        </Link>
      </Button>
      <Button variant="outlined" className={classes.button}>
        <Link to="/add-education">
          <FontAwesomeIcon icon={faGraduationCap} /> Add Education
        </Link>
      </Button>
    </Box>
  );
};

export default DashboardActions;

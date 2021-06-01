/**
 * Imports the component styles
 */
import { useStyles } from "./Dashboard.styles";

/**
 * Displays the component
 */
const Dashboard: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.root}>Dashboard</div>;
};

export default Dashboard;

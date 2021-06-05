/**
 * Imports the component styles
 */
import { useStyles } from "./CreateProfile.styles";

/**
 * Defines the props interface
 */
export interface CreateProfileProps {
  text?: string;
}

/**
 * Displays the component
 */
const CreateProfile: React.FC<CreateProfileProps> = (props) => {
  const { text } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.root}>create profile</div>;
};

export default CreateProfile;

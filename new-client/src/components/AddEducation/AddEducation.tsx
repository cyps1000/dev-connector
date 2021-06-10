import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/**
 * Imports Font Awesome Icons
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

/**
 * Imports the component styles
 */
import { useStyles } from "./AddEducation.styles";

/**
 * Imports Hooks
 */
import { useActions } from "../../hooks";

/**
 * Defines the props interface
 */
export interface AddEducationProps {
  history?: History;
}

/**
 * Displays the component
 */
const AddEducation: React.FC<AddEducationProps> = (props) => {
  const { history } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles Adding Education
   */
  const { addEducation } = useActions();

  /**
   * Defines the default state of the form
   */
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  /**
   * Gets the values from formData
   */
  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  /**
   * Handles enabling/disabling the 'To' field when current is selected
   */
  const [toDateDisabled, toggleDisabled] = useState(false);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" color="primary" gutterBottom>
        Add Your Education
      </Typography>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        <FontAwesomeIcon icon={faCodeBranch} className={classes.eduIcon} />
        Add any school or bootcamp that you have attended
      </Typography>
      <Typography>* = required field</Typography>
      <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
        <TextField
          id="school"
          label="* School or Bootcamp"
          type="text"
          name="school"
          value={school}
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="degree"
          label="* Degree or Certificate"
          type="text"
          name="degree"
          value={degree}
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="fieldofstudy"
          label="* Field of Study"
          type="text"
          name="fieldofstudy"
          value={fieldofstudy}
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="from"
          label="* From Date"
          type="date"
          name="from"
          value={from}
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
          onChange={(e) => onChange(e)}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              name="current"
              color="primary"
            />
          }
          label="Currently"
        />
        <TextField
          id="to"
          label="* To Date"
          type="date"
          name="to"
          value={to}
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
          onChange={(e) => onChange(e)}
          disabled={toDateDisabled}
        />
        <TextField
          id="description"
          label="Program Description"
          type="text"
          name="description"
          value={description}
          fullWidth
          multiline
          rows={4}
          onChange={(e) => onChange(e)}
        />
        <Box className={classes.buttonsBox}>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            value="Add Education"
            className={classes.addEduBtn}
          >
            Add Education
          </Button>
          <Button variant="outlined" className={classes.goBackBtn}>
            <Link to="/dashboard">Go Back</Link>
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddEducation;

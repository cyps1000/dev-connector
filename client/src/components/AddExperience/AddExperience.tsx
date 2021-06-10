import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
import { useStyles } from "./AddExperience.styles";

/**
 * Imports Hooks
 */
import { useActions } from "../../hooks";

/**
 * Defines the props interface
 */
export interface AddExperienceProps {
  history?: History;
}

/**
 * Displays the component
 */
const AddExperience: React.FC<AddExperienceProps> = (props) => {
  const { history } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Handles Adding Experience
   */
  const { addExperience } = useActions();

  /**
   * Defines the default state of the form
   */
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });

  /**
   * Gets the values from formData
   */
  const { company, title, location, from, to, current, description } = formData;

  /**
   * Handles enabling/disabling the 'To' field when current is selected
   */
  const [toDateDisabled, toggleDisabled] = useState(false);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container className={classes.container}>
        <Grid item lg={12}>
          <Typography variant="h4" color="primary" gutterBottom>
            Add An Experience
          </Typography>
          <Typography variant="h5" color="textPrimary" gutterBottom>
            <FontAwesomeIcon icon={faCodeBranch} className={classes.expIcon} />
            Add any developer/programming positions that you have had in the
            past
          </Typography>
          <Typography>* = required field</Typography>
        </Grid>
        <Grid item lg={12}>
          <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
            <TextField
              id="title"
              label="* Job Title"
              type="text"
              name="title"
              value={title}
              fullWidth
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="company"
              label="* Company"
              type="text"
              name="company"
              value={company}
              fullWidth
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="location"
              label="Location"
              type="text"
              name="location"
              value={location}
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
              label="Current Job"
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
              label="Job Description"
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
                value="Add Experience"
                className={classes.addExpBtn}
              >
                Add Experience
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

export default AddExperience;

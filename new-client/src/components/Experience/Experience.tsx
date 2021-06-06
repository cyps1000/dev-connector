import { format, parseISO } from "date-fns";

/**
 * Imports Material UI Components
 */
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

/**
 * Imports the component styles
 */
import { useStyles } from "./Experience.styles";

/**
 * Imports Hooks
 */
import { useActions } from "../../hooks";

/**
 * Imports The Profile Interface
 */
import { ProfilePayload } from "../../redux/types";
import { Typography } from "@material-ui/core";

/**
 * Defines the props interface
 */
export interface ExperienceProps {
  profile: ProfilePayload;
}

/**
 * Displays the component
 */
const Experience: React.FC<ExperienceProps> = (props) => {
  const { profile } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the deleteExperience action
   */
  const { deleteExperience } = useActions();

  /**
   * Checks if the user has experiences added
   */
  if (!profile.experience) return null;

  /**
   * Init the Table Body
   */
  const experiences = profile.experience.map((exp, index) => (
    <TableRow key={index} className={classes.tableData}>
      <TableCell align="left">{exp.company}</TableCell>
      <TableCell>{exp.title}</TableCell>
      <TableCell align="left">
        {format(parseISO(exp.from), "MM/dd/yyyy")} -{" "}
        {!exp.to ? "Now" : format(parseISO(exp.to), "MM/dd/yyyy")}
      </TableCell>
      <TableCell align="left">
        <Button
          className={classes.deleteButton}
          onClick={() => deleteExperience(exp.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Box className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        Experience Credentials
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Years</TableCell>
              <TableCell align="left">Remove experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{experiences}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Experience;

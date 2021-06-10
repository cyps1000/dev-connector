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
import { useStyles } from "./Education.styles";

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
export interface EducationProps {
  profile: ProfilePayload;
}

/**
 * Displays the component
 */
const Education: React.FC<EducationProps> = (props) => {
  const { profile } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  /**
   * Init the deleteEducation action
   */
  const { deleteEducation } = useActions();

  /**
   * Checks if the user has educations added
   */
  if (!profile.education) return null;

  /**
   * Init the Table Body
   */
  const educations = profile.education.map((edu, index) => (
    <TableRow key={index} className={classes.tableData}>
      <TableCell align="left">{edu.school}</TableCell>
      <TableCell>{edu.degree}</TableCell>
      <TableCell align="left">
        {format(parseISO(edu.from), "MM/dd/yyyy")} -{" "}
        {!edu.to ? "Now" : format(parseISO(edu.to), "MM/dd/yyyy")}
      </TableCell>
      <TableCell align="left">
        <Button
          className={classes.deleteButton}
          onClick={() => deleteEducation(edu._id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  ));

  return (
    <Box className={classes.container}>
      <Typography variant="h5" color="primary" gutterBottom>
        Education Credentials
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">School</TableCell>
              <TableCell align="left">Degree</TableCell>
              <TableCell align="left">Years</TableCell>
              <TableCell align="left">Remove education</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{educations}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Education;

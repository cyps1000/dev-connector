import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { Redirect } from "react-router-dom";

/**
 * Imports Material UI Components
 */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

/**
 * Imports Hooks
 */
import { useTypedSelector } from "../../hooks";
import { useActions } from "../../hooks";

/**
 * Imports the component styles
 */
import { useStyles } from "./Login.styles";

const Login: React.FC = () => {
  /**
   * Gets the component styles
   */
  const classes = useStyles();

  const { login } = useActions();

  const { dispatchAlert } = useActions();

  const { isAuthenticated, errors } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    if (errors && errors.length > 0) {
      dispatchAlert(
        errors.map((err) => err.msg),
        "error",
        3000
      );
    }
    // eslint-disable-next-line
  }, [errors]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  /**
   * Redirect if logged in
   */
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => onChange(e)}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => onChange(e)}
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            value="Login"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;

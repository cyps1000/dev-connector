import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Imports Components
 */
import PrivateRoute from "./PrivateRoute";
import Navbar from "../Navbar";
import Alert from "../Alert";
import Register from "../Register";
import Login from "../Login";
import Profiles from "../Profiles";
import Profile from "../Profile";
import Dashboard from "../Dashboard";
import Landing from "../Landing";
import Posts from "../Posts";
import Post from "../Post";
import CreateProfile from "../CreateProfile";
import EditProfile from "../EditProfile";
import AddExperience from "../AddExperience";
import AddEducation from "../AddEducation";

/**
 * Imports Utils
 */
import { setAuthToken } from "../../utils";

/**
 * Imports Hooks
 */
import { useActions } from "../../hooks";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

/**
 * Displays the component
 */
const Routes: React.FC = () => {
  const { loadUser } = useActions();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navbar />
      <Alert />
      <Route path="/">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />

          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
        </Switch>
      </Route>
    </Router>
  );
};

export default Routes;

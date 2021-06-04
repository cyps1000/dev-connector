import { Switch, Route, Redirect } from "react-router-dom";

/**
 * Imports Components
 */
import Landing from "../Landing";
import Register from "../Register";
import Login from "../Login";
import Profiles from "../Profiles";
import Profile from "../Profile";

/**
 * Imports Hooks
 */
import { useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const PublicRoutes: React.FC = () => {
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  /**
   * Redirect if logged in
   */
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/profiles">
        <Profiles />
      </Route>
      <Route exact path="/profile/:id">
        <Profile />
      </Route>
    </Switch>
  );
};

export default PublicRoutes;

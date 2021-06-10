import { Switch, Route, Redirect } from "react-router-dom";

/**
 * Imports Components
 */
import Dashboard from "../Dashboard";
import Posts from "../Posts";
import Profiles from "../Profiles";
import Profile from "../Profile";
import CreateProfile from "../CreateProfile";

/**
 * Imports Hooks
 */
import { useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const PrivateRoutes: React.FC = () => {
  const { isAuthenticated } = useTypedSelector((state) => state.auth);

  /**
   * Redirect if logged in
   */
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/dashboard/create-profile">
        <CreateProfile />
      </Route>
      <Route exact path="/dashboard/posts">
        <Posts />
      </Route>
      <Route exact path="/dashboard/profiles">
        <Profiles />
      </Route>
      <Route exact path="/dashboard/profile/:id">
        <Profile />
      </Route>
    </Switch>
  );
};

export default PrivateRoutes;

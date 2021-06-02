import { Switch, Route, Redirect } from "react-router-dom";

/**
 * Imports Components
 */
import Dashboard from "../Dashboard";
import Posts from "../Posts";

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
    return <Redirect to="/login" />;
  }

  return (
    <Switch>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/dashboard/posts">
        <Posts />
      </Route>
    </Switch>
  );
};

export default PrivateRoutes;

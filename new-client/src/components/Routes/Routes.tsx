import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * Imports Components
 */
import Navbar from "../Navbar";
import Alert from "../Alert";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

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
      <Switch>
        <Route path="/dashboard">
          <PrivateRoutes />
        </Route>
        <Route path="/">
          <PublicRoutes />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

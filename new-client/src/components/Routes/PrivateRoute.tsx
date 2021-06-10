import { Route, Redirect, RouteProps } from "react-router-dom";

/**
 * Imports Hooks
 */
import { useTypedSelector } from "../../hooks";

/**
 * Displays the component
 */
const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { ...rest } = props;

  /**
   * Init the auth state
   */
  const { isAuthenticated, loading } = useTypedSelector((state) => state.auth);

  if (!isAuthenticated && !loading) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...rest} />;
  }
};

export default PrivateRoute;

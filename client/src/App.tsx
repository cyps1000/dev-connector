import { Fragment } from "react";

/**
 * Normalizes all css for maximum browser compatibility
 */
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Imports Components
 */
import Routes from "./components/Routes";
import Providers from "./components/Providers";

/**
 * Imports CSS
 */
import "./App.css";

/**
 * Displays the component
 */
const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Providers>
        <Routes />
      </Providers>
    </Fragment>
  );
};

export default App;

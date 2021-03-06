import { Provider as ReduxProvider } from "react-redux";

/**
 * Import redux store
 */
import { store } from "../../redux";

const Providers: React.FC = (props) => {
  const { children } = props;

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Providers;

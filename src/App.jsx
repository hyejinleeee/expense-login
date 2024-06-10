import Router from "./shared/Router";
import GlobalStyles from "./shared/GlobalStyles";
import { Provider } from "react-redux";
import store from "../src/redux/config/configStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
      </Provider>
    </>
  );
}

export default App;

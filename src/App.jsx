import Router from "./shared/Router";
import GlobalStyles from "./shared/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer autoClose={700} position="top-left" />
    </>
  );
}

export default App;

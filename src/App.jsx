import Router from "./shared/Router";
import GlobalStyles from "./shared/GlobalStyles";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router />
        <ToastContainer autoClose={700} position="top-left" />
      </QueryClientProvider>
    </>
  );
}

export default App;

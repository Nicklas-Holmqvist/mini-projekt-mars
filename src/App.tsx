import ErrorBoundary from "./components/ErrorBoundary";

import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
      <BrowserRouter>
        <ErrorBoundary>
          <Layout />
        </ErrorBoundary>
      </BrowserRouter>
  );
}

export default App;

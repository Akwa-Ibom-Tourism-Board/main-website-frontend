import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "./providers";
import { AppRoutes } from "./routes";
import ScrollToHash from "./ScrollToHash";

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <ScrollToHash />
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;

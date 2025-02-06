import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode> 
    {/* // StrictMode: A component for highlighting potential problems in an application. */}
    {/* BrowserRouter: Wraps the entire <App /> component to enable client-side routing with React Router. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

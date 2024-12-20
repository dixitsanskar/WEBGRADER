import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter here
import { PageSpeedProvider } from "./Context/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageSpeedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageSpeedProvider>
  </StrictMode>
);
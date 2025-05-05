import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Handle GitHub Pages redirect for client-side routing
const isProduction = import.meta.env.PROD;
const baseUrl = isProduction ? "/GainsPlusDemo" : "";

// If we're in production and the path doesn't start with the base URL,
// redirect to the correct path
if (isProduction) {
  const path = window.location.pathname;
  if (!path.startsWith(baseUrl)) {
    window.location.href = `${baseUrl}${path}`;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

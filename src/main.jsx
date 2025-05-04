import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Handle GitHub Pages redirect for client-side routing
const baseUrl = "/GainsPlusDemo";
const path = window.location.pathname;
if (path.startsWith(baseUrl)) {
  const newPath = path.slice(baseUrl.length);
  window.history.replaceState(null, "", newPath || "/");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

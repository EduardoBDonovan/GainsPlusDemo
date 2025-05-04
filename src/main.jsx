import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Handle GitHub Pages redirect for client-side routing
if (window.location.search.includes("redirect=")) {
  const redirectPath = window.location.search.replace("?redirect=", "");
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

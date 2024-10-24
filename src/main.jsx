import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");  // ✅ Properly initialized
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

import SavedBooksProvider from "../contexts/SavedBooksContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SavedBooksProvider>
      <App />
    </SavedBooksProvider>
  </StrictMode>,
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18next.jsx";
import Router from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Suspense fallback="loading">
      <Router />
    </React.Suspense>
  </StrictMode>
);

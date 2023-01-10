import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);

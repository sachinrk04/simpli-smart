import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <CssBaseline />
    <App />
  </Router>
);

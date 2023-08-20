// Import React and ReactDOM
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-React Plugin
import Framework7React from "framework7-react";

// Import Framework7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "./css/icons.css";
import "./css/app.less";

// Init F7 React Plugin
Framework7.use(Framework7React);

// Mount React App
const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

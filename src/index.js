import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { AppProvider } from "./Component/Contex/Contex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);

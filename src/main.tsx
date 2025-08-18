import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HeaderHeightProvider } from "./context/HeaderHeightContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeaderHeightProvider>
      <App />
    </HeaderHeightProvider>
  </React.StrictMode>
);

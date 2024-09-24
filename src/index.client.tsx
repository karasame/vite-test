import "./index.css";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

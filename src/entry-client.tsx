import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./main.css";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

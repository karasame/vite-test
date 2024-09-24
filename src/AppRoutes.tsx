import { Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import FetchData from "./pages/FetchData/FetchData";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/fetchData" element={<FetchData />} />
    </Routes>
  );
};

export default AppRoutes;

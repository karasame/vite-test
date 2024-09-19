import { Route, Routes } from "react-router-dom";
import App from "./pages/App";
import TestPage from "./pages/TestPage";
import Images from "./pages/Images";
import { Helmet } from "react-helmet";

const AppRoutes = () => {
  return (
    <>
      <Helmet>
        <title>Vite + React + TS</title>
        <meta name="description" content="This is the Home Page" />
      </Helmet>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/testPage" element={<TestPage />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

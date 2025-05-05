import { Routes, Route } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./routes-constants";
import HomePage from "../pages/Home";
import AppLayout from "../layout/app-layout";
import WomenPage from "../pages/Women";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE_CONSTANTS.WOMEN} element={<WomenPage/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

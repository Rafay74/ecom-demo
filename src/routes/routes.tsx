import { Routes, Route } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./routes-constants";
import HomePage from "../pages/Home";
import AppLayout from "../layout/app-layout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

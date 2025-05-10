import { Routes, Route } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./routes-constants";
import HomePage from "../pages/Home";
import AppLayout from "../layout/app-layout";
import WomenPage from "../pages/Women";
import MenPage from "../pages/Men";
import KidPage from "../pages/Kid";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ForgetPasswordPage from "../pages/Forget-Password";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE_CONSTANTS.WOMEN} element={<WomenPage/>} />
        <Route path={ROUTE_CONSTANTS.MEN} element={<MenPage/>} />
        <Route path={ROUTE_CONSTANTS.KID} element={<KidPage/>} />
        <Route path={ ROUTE_CONSTANTS.LOGIN} element={ <LoginPage/>} />
        <Route path={ROUTE_CONSTANTS.REGISTER} element={ <RegisterPage/> } />
        <Route path={ROUTE_CONSTANTS.FORGET_PASSWORD} element={ <ForgetPasswordPage/> } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

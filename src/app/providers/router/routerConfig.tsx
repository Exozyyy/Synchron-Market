import type {RouteObject} from "react-router-dom";
import LoginPage from "../../../pages/Auth/LoginPage/Login-page.tsx";
import RegisterPage from "../../../pages/Auth/RegisterPage/Register-page.tsx";

export const appRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage/>

    },
    {
        path: "/register",
        element: <RegisterPage/>
    }
];

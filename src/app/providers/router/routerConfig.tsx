import type {RouteObject} from "react-router-dom";
import LoginPage from "../../../pages/Auth/LoginPage/Login-page.tsx";
import RegisterPage from "../../../pages/Auth/RegisterPage/Register-page.tsx";
import ProfilePage from "../../../pages/UserProfile/Profile-Page.tsx";

export const appRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage/>

    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/profile",
        element: <ProfilePage/>
    }

];

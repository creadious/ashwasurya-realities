import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import UnderMaintain from "../Pages/UnderMaintain/UnderMaintain";
import Atharva from "../Pages/Atharva/Atharva";
import Admin from "../Layout/Admin";
import UserData from "../Pages/AdminPanel/UserData/UserData";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import Keerthi from "../Pages/Keerthi/Keerthi";
import Thankyou from "../Pages/Thankyou/Thankyou";
import AuthProvider from "../provider/AuthProvider";
import Lotus from "../Pages/Lotus/Lotus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/maintenance",
        element: <UnderMaintain />,
      },
      {
        path: "/projects/atharva",
        element: <Atharva />,
      },
      {
        path: "/projects/keerthi",
        element: <Keerthi />,
      },
      {
        path: "/projects/lotus",
        element: <Lotus />,
      },
    ],
  },
  {
    path: "/admin/login",

    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-data",
        element: <UserData />,
      },
    ],
  },
  {
    path: "/thank-you",
    element: <Thankyou />,
  },
]);

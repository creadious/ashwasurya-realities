import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Layout/ErrorPage";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import UnderMaintain from "../Pages/UnderMaintain/UnderMaintain";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/maintenance',
                element: <UnderMaintain />
            },
        ]
    }
])
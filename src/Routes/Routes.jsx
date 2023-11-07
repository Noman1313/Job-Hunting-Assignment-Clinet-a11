import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allJobs',
                element: <div>Noman</div>
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoutes><div>apply jobsssss</div></PrivateRoutes>
            },
            {
                path: '/addAJobs',
                element: <PrivateRoutes><div>addddddddd job</div></PrivateRoutes>
            },
            {
                path: '/myJobs',
                element: <PrivateRoutes><div>my jooooobs</div></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <div>blooooooooogs</div>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
]);

export default router;
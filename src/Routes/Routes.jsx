import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Page/Blogs/Blogs";
import AllJobs from "../Page/AllJobs/AllJobs";

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
                element: <AllJobs></AllJobs>
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
                element: <Blogs></Blogs>
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
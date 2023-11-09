import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Page/Blogs/Blogs";
import AllJobs from "../Page/AllJobs/AllJobs";
import JobDetails from "../Page/Home/JobDetails";
import AppliedJobs from "../Page/AppliedJobs/AppliedJobs";
import AddJob from "../Page/AddJob/AddJob";

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
                path:'/details/:id',
                element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
            },
            {
                path: '/addAJobs',
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
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
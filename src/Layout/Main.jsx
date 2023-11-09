import { Outlet } from "react-router-dom";
import Navbar from "../Page/SharedPage/Navbar/Navbar";
import Footer from "../Page/SharedPage/Footer/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;
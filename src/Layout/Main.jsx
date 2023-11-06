import { Outlet } from "react-router-dom";
import Navbar from "../Page/SharedPage/Navbar/Navbar";
import Footer from "../Page/SharedPage/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
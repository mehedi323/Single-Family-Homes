import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar";
import Footer from "../Pages/Footer";



const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Navbar/Footer/Footer";

const Root = () => {
    return (
        <div className="font-poppins">
            <div className="mx-auto container">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Navbar/Footer/Footer";
// import Navbarr from "../../shared/Navbar/Navbarr";

const Root = () => {
    return (
        <div className="font-poppins">
            <div className="mx-auto container">
                <Navbar></Navbar>
                {/* <Navbarr></Navbarr> */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
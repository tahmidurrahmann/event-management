import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 my-6 justify-between items-center">
            <h1 className="text-4xl font-extrabold">Dream <span className="text-[#F9A51A]">Eve</span></h1>
            <div className="flex gap-4 md:gap-10 items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#F9A51A] py-2 px-5 rounded-lg text-white font-medium" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-[#F9A51A] py-2 px-5 rounded-lg text-white font-medium" : ""
                    }
                >
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
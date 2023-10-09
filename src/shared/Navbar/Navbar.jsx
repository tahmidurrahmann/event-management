import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful')
            })
            .catch(() => {
                toast.error('Logout Unsuccessful')
            })
    }

    return (
        <div className="my-4 md:my-6 flex gap-6 flex-col lg:flex-row justify-between items-center mx-auto container">
            <div>
                <h1 className="text-2xl md:text-4xl font-extrabold">Dream <span className="text-[#F9A51A]">Eve</span></h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg" : ""
                    }
                >
                    <span className="text-xl font-semibold">Home</span>
                </NavLink>
                {user && <NavLink
                    to="/booking"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg" : ""
                    }
                >
                    <span className="text-xl font-semibold">Booking</span>
                </NavLink>}
                <NavLink
                    to="/aboutUs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg" : ""
                    }
                >
                    <span className="text-xl font-semibold">About Us</span>
                </NavLink>
                {!user &&
                    <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg" : ""
                        }
                    >
                        <span className="text-xl font-semibold">Register</span>
                    </NavLink>
                }
                {user && <NavLink
                    to="/contactUs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg" : ""
                    }
                >
                    <span className="text-xl font-semibold">Contact Us</span>
                </NavLink>}
            </div>

            <div>
                {user ? <div className="flex flex-col md:flex-row gap-5 items-center">
                    <h1 className="text-black text-lg font-medium font-poppins">{user.displayName}</h1>
                    <span><button onClick={handleLogOut} className="text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg">LogOut</button></span>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} alt="" />
                        </div>
                    </label>
                </div>
                    : <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-lg text-white font-medium bg-[#F9A51A] py-2 px-4 lg:px-6 rounded-lg" : ""
                        }
                    >
                        <span className="text-xl font-semibold">Login</span>
                    </NavLink>}
            </div>
        </div>
    );
};

export default Navbar;
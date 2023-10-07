import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Service from "../pages/Service/Service";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import Booking from "../pages/Booking/Booking";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        errorElement : <Error></Error>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('/event.json')
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            {
                path : '/services/:id',
                element : <PrivateRoute><Service></Service></PrivateRoute>,
                loader : ()=> fetch('/event.json')
            },
            {
                path : '/aboutUs',
                element : <AboutUs></AboutUs>
            },
            {
                path : '/contactUs',
                element : <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path : '/booking',
                element : <PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    }
])

export default router;